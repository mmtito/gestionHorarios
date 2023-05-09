import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credenciales } from './credenciales';
import { LoginService } from './login.service';
import ResponseErrors from 'src/app/utils/errors';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {


  loggedIn: boolean = false;
  loading = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackbar : MatSnackBar
  ) { }

  user = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(4)]),
    password : new FormControl('', [Validators.required, Validators.minLength(3)])

  })

  singIn(): void{
    

    if(!this.canSingIn()) return;
    this.loading = true;

    this.loginService.singIn(this.user.value).subscribe(
    {
      next : (response: HttpResponse<Credenciales>) => {
        if (response.headers.get('Authorization')!=null){
          sessionStorage.setItem("seguridad_token", String(response.headers.get('Authorization')));
          sessionStorage.setItem("username", this.username);
          this.loggedIn = true;
          sessionStorage.setItem("loggedIn","true");
          this.router.navigate(['/layout/dashboard'])
      
        }
      },
      error : (error)=>{
        this.loggedIn = false;
        this.loading = false;
        this.snackbar.open(ResponseErrors.getMessageError(error))
      }
    })
    this.loading = true
  }

  private canSingIn(){

    return (!this.loading && this.user.valid );

  }

  //Getters and setters from user form
  
  //getters
  get username():any{ return this.user.get('username') };
  get password():any{ return this.user.get('password') };

  //setters
  set username(value : any ){ this.user.patchValue({ username : value }) };
  set password(value : any ){ this.user.patchValue({ password : value }) };

}

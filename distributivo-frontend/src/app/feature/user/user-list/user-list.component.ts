import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { pageable } from 'src/app/models/pageable';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import ResponseErrors from 'src/app/utils/errors';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: []
})
export class UserListComponent implements OnInit {

  constructor(public userService : UserService,
    private route : ActivatedRoute,
    private snackbar : MatSnackBar,
    private dialog : MatDialog

    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
    this.getUsers(
      { 
        page : params['page'] || '0',count : params['count'] || '10'
      }
    );

    })
   
  }

  public currentId = '';

  private getUsers(opt : pageable){
    this.userService.getUsers(opt).subscribe(
      {
        next : (res)=> this.userService.listUsers = res,
        error : (err)=> this.snackbar.open(`​${ResponseErrors.getMessageError(err)}❌`)
      }
  )
  }

  public openDialog(id: string) {
    this.setCurrentId(id);

    const ref = this.dialog.open(DialogComponent, {
      data: {
        title: 'Eliminar usuario',
        message: `Desea eliminar esta usuario \n 
      si elimina esta usuario todas las aulas que estbaban en esta no tendran usuario
      `,
      },
      width: '320px',
    });

    ref.afterClosed().subscribe
    ((result) => {
      if (result) this.delete();
      else this.removeCurrentId();
    });
  }


  public delete(){
    this.userService.removeUser(this.currentId).subscribe(
      
      {
        next : (_)=>{
          this.removeFromLocalList()
          this.currentId = '';
          this.snackbar.open("Usuario eliminado correctamente ​✅​");

        },
        error : (err)=> this.snackbar.open(`​${ResponseErrors.getMessageError(err)}❌`)
      });
  }

  private removeFromLocalList(){
    this.userService.listUsers.users =
    this.userService.listUsers.users.filter(v=> v.id != this.currentId);    
    
  }

  public setCurrentId(id : string){
    this.currentId = id;
  }

  public removeCurrentId(){
    this.currentId = '';
  }

}

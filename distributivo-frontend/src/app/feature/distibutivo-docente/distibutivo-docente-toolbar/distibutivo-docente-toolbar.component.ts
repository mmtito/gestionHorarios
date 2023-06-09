import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-distibutivo-docente-toolbar',
  templateUrl: './distibutivo-docente-toolbar.component.html'
})
export class DistibutivoDocenteToolbarComponent implements OnInit {

  constructor(
    private matSnackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  @Output() termEmitterDni = new EventEmitter<string>();
  @Output() termEmitterName = new EventEmitter<string>();
  @Output() termEmitterLastname = new EventEmitter<string>();

  public onInputDni(dni : string){
    this.termEmitterDni.emit(dni);
  }

  public onInputName(name : string){
    this.termEmitterName.emit(name);
  }

  public onInputLastname(lastname : string){
    this.termEmitterLastname.emit(lastname);
  }

  public distributiveList (){
    this.matSnackBar.open('Lista De Distributivo OK ✔')
  }

  public dashboard () {
    this.matSnackBar.open('Dashboard OK ✔')
  }
}

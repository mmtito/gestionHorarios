import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-asignature-toolbar',
  templateUrl: './asignature-toolbar.component.html',
})
export class AsignatureToolbarComponent implements OnInit {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  @Output () termEmitter = new EventEmitter<string>();

  public onInput(term : string){
    this.termEmitter.emit(term);
    console.log(term)
  }

  public breadcumbs () {
    this.matSnackBar.open('Lista De Asignaturas OK ✔')
  }

  public dashboard () { 
    this.matSnackBar.open('Dashboard OK ✔')
  }

}

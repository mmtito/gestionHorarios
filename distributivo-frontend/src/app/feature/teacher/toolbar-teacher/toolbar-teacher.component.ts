import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar-teacher',
  templateUrl: './toolbar-teacher.component.html'
})
export class ToolbarTeacherComponent implements OnInit {

  @Input() entityName: string = "docente1";
  @Output() termEmitter = new EventEmitter<string>();

  constructor(
    private matSnackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public onInput(term : string ){
    this.termEmitter.emit(term);
  }

  public listadoTeacher (){
    this.matSnackBar.open('Lista De Docentes OK ✔')
  }
  public dashboard (){
    this.matSnackBar.open('Dashboard OK ✔')
  }
}

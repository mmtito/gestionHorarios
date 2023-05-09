import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-asignature-import',
  templateUrl: './asignature-import.component.html',
})
export class AsignatureImportComponent implements OnInit {

  constructor(
    private matSnackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public cancelar () : void { 
    this.matSnackBar.open('Se ha cancelado la peticion ✘');
  }
  
}

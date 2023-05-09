import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInput } from '../models/dialogInput';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {


  constructor( @Inject(MAT_DIALOG_DATA) public data : DialogInput ) { }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import ResponseErrors from 'src/app/utils/errors';
import { TeacherConfigurationnService } from '../teacher-configuration.service';
import { Location } from '../models/teacherConfiguration';

@Component({
  selector: 'app-teacher-configuration-combobox',
  templateUrl: './teacher-configuration-combobox.component.html',
  styleUrls: []
})
export class TeacherConfigurationComboboxComponent implements OnInit {

  @Output() locationEventEmittier = new EventEmitter<string>();
  @Input() locationId = '';

  constructor(
    private teacherConfigurationService : TeacherConfigurationnService,
    private snackbar : MatSnackBar
  ) { }

  public locations :Location[] =[]; 

  ngOnInit(): void {
   this.getLocations();
  }

  changeLocation(value : string){
    this.locationEventEmittier.emit(value);

  }
  
  getLocations(){
    this.teacherConfigurationService.findAllLocations().subscribe(
      {
        next : (res)=>{
          this.locations = res;
        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
      })

  }
}

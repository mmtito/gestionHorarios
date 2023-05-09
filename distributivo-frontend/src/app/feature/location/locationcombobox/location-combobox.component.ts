import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import ResponseErrors from 'src/app/utils/errors';
import { LocationService } from '../location.service';
import { Location } from '../models/location';

@Component({
  selector: 'app-location-combobox',
  templateUrl: './location-combobox.component.html',
  styleUrls: []
})
export class LocationComboboxComponent implements OnInit {

  @Output() locationEventEmittier = new EventEmitter<string>();
  @Input() locationId = '';

  constructor(
    private locationService : LocationService,
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
    this.locationService.findAllLocations().subscribe(
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

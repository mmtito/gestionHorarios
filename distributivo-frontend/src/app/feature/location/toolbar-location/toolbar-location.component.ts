import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import ResponseErrors from 'src/app/utils/errors';
import { LocationService } from '../location.service';
import { Location } from '../models/location';

@Component({
  selector: 'app-toolbar-location',
  templateUrl: './toolbar-location.component.html',
  styleUrls: []
})
export class ToolbarLocationComponent{

  constructor(
    private locationService : LocationService,
    private snackbar : MatSnackBar

  ) { }

  search(value : string){
    this.locationService.getLocationByName(value).subscribe(
      {
        next : (res)=> this.setListLocations(res),
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
      })
  }
  public setListLocations(locations : Location[]){
    this.locationService.listLocations = {
      capacity : 0,
      totalPages : 0,
      total : 0, 
      page : 0 ,
      locations : locations
    }

  }

}
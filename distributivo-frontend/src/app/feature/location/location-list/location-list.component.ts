import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { pageable } from 'src/app/models/pageable';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import ResponseErrors from 'src/app/utils/errors';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: []
})
export class LocationListComponent implements OnInit {

  constructor(public locationService : LocationService,
    private route : ActivatedRoute,
    private snackbar : MatSnackBar, 
    private dialog : MatDialog

    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
    this.getLocations(
      { 
        page : params['page'] || '0',count : params['count'] || '10'
      }
      );

    })
   
  }

  public currentId = '';

  private getLocations(opt : pageable){
    this.locationService.getLocations(opt).subscribe(
      {
        next : (res)=>{
          this.locationService.listLocations = res
        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
      })
  }

  public delete(){
    this.locationService.removeLocation(this.currentId).subscribe(
      {
        next : (res)=>{
          this.removeFromLocalList();
          this.currentId = '';
          this.snackbar.open('Se ha eliminado la ubicacion correctamente ​✅​');
        },
        error : (error)=>{
         this.snackbar.open(ResponseErrors.getMessageError(error));
        }
      }
    )
  }

  public openDialog(id: string) {
    this.setCurrentId(id);

    const ref = this.dialog.open(DialogComponent, {
      data: {
        title: 'Eliminar ubicacion',
        message: `Desea eliminar esta ubicacion \n 
      si elimina esta ubicacion todas las aulas que estbaban en esta no tendran ubicacion :(
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

  private removeFromLocalList(){
    this.locationService.listLocations.locations = 
    this.locationService.listLocations.locations.filter(v=> v.id != this.currentId);
  }
  public setCurrentId(id : string){
    this.currentId = id;
  }

  public removeCurrentId(){
    this.currentId = '';
  }

}

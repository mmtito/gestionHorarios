import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import ResponseErrors from 'src/app/utils/errors';
import { environment } from 'src/environments/environment';
import { LocationService } from '../location.service';

@Component({
  selector: 'bottom-sheet-overview-location',
  templateUrl: './bottom-sheet-overview-location.html',
  styleUrls: []
})
export class BottomSheetOverviewLocation {

  constructor(private dowloandExcelService : DowloandExcelService,
    private locationService : LocationService,
    private uploadExcelService : DowloandExcelService,
    private snackbar : MatSnackBar,
    private dialog : MatDialog
    ) { }
  
  public files : File[] = [];
  loading = false;

  importLocations(input : HTMLInputElement ) : any{
    
    if(!this.canImport(input.files)) return this.snackbar.open('Ningun archivo seleccionado ❌')
    this.loading = true;
    this.uploadExcelService.onFileSelected(input.files!, environment.URL+'/api/location/import-excel')
    .subscribe(
      {
        next : (res)=>{
          this.loading = false;
          this.dialog.open(DialogComponent,{
            data : {
              title : "Reporte",
              message : res.data
            }
          })
          input.value = '';
        },
        error : (error)=>{
          this.loading = false;
          this.snackbar.open(error)
        }
      })
  }
  
  setFiles(files : File[] | null){
    
    this.files = files ? files : [];

  }

  downloadFile() {
    if(!this.canDownload()) return;
    this.loading = true;
    this.locationService.downloadFile()
      .subscribe(
        {
        next : (res)=> {
          this.loading =false;
          this.dowloandExcelService.downloadFile(res)
        },
        error : (error)=>{
          this.loading = false;
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
        })
  }


  private canDownload(){return !this.loading}
  private canImport(files : FileList | null){

    return (!this.loading && files?.length !== 0)
    
  }

}

/**
 * @title Buttom Sheet Overview
 */
@Component({
  selector: 'bottom-sheet-location',
  templateUrl: './bottom-sheet-location.html',
})
export class BottomSheetClassroom {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewLocation);
  }
}

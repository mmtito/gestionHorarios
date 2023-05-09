import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import ResponseErrors from 'src/app/utils/errors';
import { environment } from 'src/environments/environment';
import { TeacherConfigurationnService } from '../teacher-configuration.service';

@Component({
  selector: 'bottom-sheet-overview-configuration',
  templateUrl: './bottom-sheet-overview-configuration.html',
  styleUrls: []
})
export class BottomSheetOverviewConfiguration {

  loading = false;

  constructor(private dowloandExcelService : DowloandExcelService,
    private teacherConfigurationService : TeacherConfigurationnService,
    private uploadExcelService : DowloandExcelService,
    private snackbar : MatSnackBar,
    private dialog : MatDialog
    ) { }

  importLocations(input : HTMLInputElement ) : any{
    
    if(this.canImport(input.files)) return this.snackbar.open('Ningun archivo seleccionado ❌')
    this.loading = true;
    this.uploadExcelService.onFileSelected(input.files!, environment.URL+'/api/teacher-configuration/import-excel')
    .subscribe(
      {
        next : (res)=>{
          this.loading = false;
          this.dialog.open(DialogComponent,{
            data : {
              title : "Informe",
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
  

  downloadFile() {
    if(!this.canDownLoad()) return;
    this.loading = true;
    this.teacherConfigurationService.downloadFile()
      .subscribe(
        {
        next : (res)=> {this.dowloandExcelService.downloadFile(res)
          this.loading = false;
        },
        error : (error)=>{
          this.loading = false;
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
        })
  }

  private canDownLoad(){return !this.loading }
  private canImport(files : FileList | null){return (!this.loading && files!.length > 0 )}
}


/**
 * @title Buttom Sheet Overview
 */
@Component({
  selector: 'bottom-sheet-configuration',
  templateUrl: './bottom-sheet-configuration.html',
})
export class BottomSheetConfiguration {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewConfiguration);
  }
}
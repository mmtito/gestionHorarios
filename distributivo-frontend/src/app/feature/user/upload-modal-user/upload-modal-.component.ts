import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import ResponseErrors from 'src/app/utils/errors';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'bottom-sheet-overview-user',
  templateUrl: './bottom-sheet-overview-user.html',
  styleUrls: []
})
export class BottomSheetOverviewUser {
  loading = false;

  constructor(private dowloandExcelService : DowloandExcelService,
    private UserService : UserService,
    private uploadExcelService : DowloandExcelService,
    private snackbar : MatSnackBar,
    private dialog : MatDialog
    
    ) { }
  
  public files : File[] = []; 



  importUsers(input : HTMLInputElement ):any{
    
    if(!this.canImport(input.files)) return  this.snackbar.open( 'Ningun archivo seleccionado ​​❌');
    this.loading = true;
    this.uploadExcelService.onFileSelected(input.files!, environment.URL+'/api/user/import-excel')
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
      error : (err)=>{
        this.loading = false;
        this.snackbar.open(ResponseErrors.getMessageError(err))

      }
      
      },
    
    )
    

  }
  
  setFiles(files : File[] | null){
    
    this.files = files ? files : [];

  }

  downloadFile() {
    if(!this.canDownload())return;
    this.loading = true;
    this.UserService.downloadFile().subscribe(
        {
          next :  (response ) => {
            this.loading = false;
            this.dowloandExcelService.downloadFile(response);
           },
           error : (err)=>{
            this.loading = false;
            this.snackbar.open(ResponseErrors.getMessageError(err));

           }
        }
       
      )
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
  selector: 'bottom-sheet-user',
  templateUrl: './bottom-sheet-user.html',
})
export class BottomSheetuser {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewUser);
  }
}

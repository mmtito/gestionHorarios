import { Component, OnInit } from '@angular/core';
import { TeacherDtoService } from '../../db/services/teacher-dto.service'; 
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import ResponseErrors from 'src/app/utils/errors';
import { environment } from 'src/environments/environment';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'bottom-sheet-overview-distributivo',
  templateUrl: './bottom-sheet-overview-distributivo-docente.html'
})
export class BottomSheetOverviewDocente {

  loading = false;
  constructor(
    private dowloandExcelService: DowloandExcelService,
    private teacherDtoService : TeacherDtoService,
    private snackbar : MatSnackBar,
    private dialog : MatDialog,
    private router : Router
  ) { }
  public files : File[] = []; 


  importLocations(files : FileList | null ):any {
    
    if(!this.canImport(files)) return this.snackbar.open('No existe ningun archivo seleccionado ❌')

    this.loading = true;

    this.dowloandExcelService.onFileSelected(files!, environment.URL+'/api/distributive/import-excel')
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
          this.reload();

        },
        error : (error)=>{
          this.loading = false;
          this.snackbar.open(ResponseErrors.getMessageError(error));
        }
      })
  }
  
  setFiles(files : File[] | null){
    
    this.files = files ? files : [];

  }

  downloadFile() {
    if(!this.canDownload()) return;
    this.loading = true;                               
    this.teacherDtoService.generateExcelFile().subscribe(
        {
          next : (res)=>{
            this.loading =false;
            this.dowloandExcelService.downloadFile(res);
        
          },
          error : (error)=>{
          this.loading = false;
          this.snackbar.open(ResponseErrors.getMessageError(error))
          }
        }
    ) 
  }

  private canDownload(){return !this.loading}
  private canImport(files : FileList | null){

    return (!this.loading && files?.length !== 0)
    
  }
  
  private reload(){
    this.router.navigateByUrl('/layout', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/layout/classroom/']);
  }); 


}
}



/**
 * @title Buttom Sheet Overview
 */
@Component({
  selector: 'bottom-sheet-distributivo-docente',
  templateUrl: './bottom-sheet-distributivo-docente.html',
})
export class BottomSheetDistributivoDocente {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewDocente);
  }
}
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import ResponseErrors from 'src/app/utils/errors';
import { environment } from 'src/environments/environment';
import { TeacherService } from '../../db/services/teacher.service';

@Component({
  selector: 'bottom-sheet-overview-teacher',
  templateUrl: './bottom-sheet-overview-teacher.html'
})
export class BottomSheetOvgerviewTeacher{

  constructor(
    private dowloandExcelService: DowloandExcelService,
    private teacherService: TeacherService,
    private uploadExcelService: DowloandExcelService,
    private snackbar : MatSnackBar,
    private dialog : MatDialog,
    private router : Router) { }
    loading = false;

  public files: File[] = [];


  

  importTeacher(files : FileList | null ):any {
    
    if(!this.canImport(files)) return this.snackbar.open('No existe ningun archivo seleccionado ❌')

    this.loading = true;

    this.uploadExcelService.onFileSelected(files!, environment.URL+'/api/teacher/import-excel')
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

  generateExcel() {
    if(!this.canDownload()) return;
    this.loading = true;                               
    this.teacherService.generateExcelFile().subscribe(
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
  selector: 'bottom-sheet-teacher',
  templateUrl: './bottom-sheet-teacher.html',
})
export class BottomSheetTeacher {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOvgerviewTeacher);
  }
}
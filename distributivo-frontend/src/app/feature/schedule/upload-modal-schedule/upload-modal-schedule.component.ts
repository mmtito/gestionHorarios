import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DowloandExcelService } from 'src/app/excel/dowloand-excel.service';
import ResponseErrors from 'src/app/utils/errors';
import { environment } from 'src/environments/environment';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'bottom-sheet-overview-schedule',
  templateUrl: './bottom-sheet-overview-schedule.html',
  styleUrls: []
})
export class BottomSheetOverviewSchedule  {
loading = false;

  constructor(private dowloandExcelService: DowloandExcelService,
    private scheduleService: ScheduleService,
    private uploadExcelService: DowloandExcelService,
    private snackbar: MatSnackBar) { }

  public files: File[] = [];


  importSchedules(input: HTMLInputElement): any {

    if (!this.canImport(input.files)) return this.snackbar.open('Ningun archivo seleccionado ❌')
    this.loading = true;
    this.uploadExcelService.onFileSelected(input.files!, environment.URL + '/api/schedule/import-excel')
      .subscribe({
        next : (_)=>{this.loading =false
          this.scheduleService.reload()
        },
        error : (err)=>{
          this.loading = false;
          this.snackbar.open(ResponseErrors.getMessageError(err))
        }
      })
  }


  setFiles(files: File[] | null) {

    this.files = files ? files : [];

  }

  downloadFile() {
    if(!this.canDownload()) return;
    this.loading = true;
    this.scheduleService.downloadFile()
      .subscribe({
        next: (_) => { 
          this.loading = false; 
          this.scheduleService.reload()},
        error: (err) => {
          this.loading = false;
          this.snackbar.open(ResponseErrors.getMessageError(err))

        }
      })
  }

  private canDownload(){return !this.loading}
  private canImport(files : FileList | null){

    return (!this.loading && files?.length !== 0)
    
  }
}


@Component({
  selector: 'bottom-sheet-schedule',
  templateUrl: './bottom-sheet-schedule.html'
})

export class BottomSheetSchedule {
  constructor( private _matbottomsheet : MatBottomSheet) { }

  openBottomSheet(){
    this._matbottomsheet.open(BottomSheetOverviewSchedule);
  }

}

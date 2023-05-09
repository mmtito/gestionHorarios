import { Component } from '@angular/core';
import { PickDate,  } from '../models/datePick';
import { ScheduleService } from '../schedule.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import ResponseErrors from 'src/app/utils/errors';
import { FileService } from 'src/app/core/file.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-report',
  templateUrl: './modal-report.component.html',
})
export class ModalReportComponent {

  constructor(
   private sheduleService : ScheduleService,
   private snackBar : MatSnackBar,
   private fileService : FileService) { }

   loading = false;

   optprint = new FormGroup({

    id : new FormControl('', Validators.required),
    entity : new FormControl('', Validators.required),
    start : new FormControl('', [Validators.required, Validators.minLength(8)]),
    end : new FormControl('',[Validators.required, Validators.minLength(8)]),

   });

  
  addRange(dates : PickDate){

    this.start = dates.start?.toISOString && dates.start.toISOString().split('T')[0];
    this.end = dates.end?.toISOString && dates.end.toISOString().split('T')[0];
  }

  addEntity(value : string){ this.id = value }

  onPrint(){

    console.log(this.optprint.valid)
    if(!this.canPrint()) return;
    
    this.loading = true;
    
    this.sheduleService.printSchedule(this.optprint.value).subscribe(
      {
        next : (res)=>{
          this.fileService.downloadFile(res);
          this.loading = false;
          document.getElementById('active-report-calendar')?.click();

        },
        error :(err)=>{
          this.snackBar.open(ResponseErrors.getMessageError(err));
          this.loading = false;
        }
      }
    );

  }

  canPrint(){return (!this.loading && this.optprint.valid)}


  //Getters and setter from optprint form

  //getters
  get id():any{ return this.optprint.get('id') };
  get entity():any{ return this.optprint.get('entity') };
  get end():any{ return this.optprint.get('end') };
  get start():any{ return this.optprint.get('start') };

  //setters
  set id(value : any){ this.optprint.patchValue({id: value}) };
  set entity(value : any){ this.optprint.patchValue({entity: value}) };
  set end(value : any){ this.optprint.patchValue({end: value}) };
  set start(value : any){ this.optprint.patchValue({start: value}) };
  

}

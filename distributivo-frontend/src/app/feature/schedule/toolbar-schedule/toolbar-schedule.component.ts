import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import FromToDay from '../util/DateChange'

@Component({
  selector: 'app-toolbar-schedule',
  templateUrl: './toolbar-schedule.component.html',
  styleUrls: []
})
export class ToolbarScheduleComponent implements OnInit {

  constructor(
    private scheduleService : ScheduleService
 
  ) { }

  public dates : FromToDay  = new FromToDay();
  public dateForCLient : string = '';



  ngOnInit(): void {
    this.setParamsDay();
    this.dateForCLient = this.dates.getDateForClient()
    

  }
  
  setParamsDay(){
    const date_str = this.dates.date.toISOString().split('T')[0];
    console.log(date_str)
    this.scheduleService.addQueryParam({ date : date_str });
  }


  onChangeClassroom(id : string){
 
  this.scheduleService.addQueryParam({ room : id });

  }

  onChangeGrade(id : string){
    this.scheduleService.addQueryParam({ grade : id });
  }
  
  onChangeTeacher(id : string){
    this.scheduleService.addQueryParam({ teacher : id });
  }
  
  handlerClickNextWeek(){
    this.dates.next()
    this.dateForCLient = this.dates.getDateForClient();
    this.setParamsDay()

  }
  
  handlerClickRedoWeek(){
    this.dates.redo()
    this.dateForCLient = this.dates.getDateForClient();
    this.setParamsDay()
  }

}

import { Component } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { ClassRoom } from '../models/classroom';

@Component({
  selector: 'app-toolbar-classroom',
  templateUrl: './toolbar-classroom.component.html',
  styleUrls: []
})
export class ToolbarClassroomComponent{

  constructor(
    private classroomService : ClassroomService,

  ) { }

  search(value : string){
    this.classroomService.getCLassroomByName(value).subscribe(
      (data)=>{
        this.setListClassrooms(data);
      }
      
)

  }
  public setListClassrooms(classroom : ClassRoom[]){
    this.classroomService.listClassrooms = {
      capacity : 0,
      totalPages : 0,
      total : 0, 
      page : 0 ,
      classrooms : classroom
    }

  }

}

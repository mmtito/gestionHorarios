import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-pagination-classroom',
  templateUrl: './pagination-classroom.component.html',
  styleUrls: []
})
export class PaginationClassroomComponent {

  

  constructor(
    public classRoomService : ClassroomService,
    public router : Router
  ) { }

  handlerChange(event : PageEvent){
    this.addQueryParam(event)

  }


  private addQueryParam(event : PageEvent ){

    this.router.navigate(
      [], 
    {
     queryParams: {
      count : event.pageSize,
      page : event.pageIndex
     },
     queryParamsHandling : 'merge',
     skipLocationChange : true
   
   });

   
}




  

}

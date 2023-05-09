import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-pagination',
  templateUrl: './teacher-pagination.component.html'
})
export class TeacherPaginationComponent{

  constructor(
    public teacherService : TeacherService,
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
     skipLocationChange : false
   
   });


  }



}

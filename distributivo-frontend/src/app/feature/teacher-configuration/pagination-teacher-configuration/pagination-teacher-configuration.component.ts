import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TeacherConfigurationnService } from '../teacher-configuration.service';

@Component({
  selector: 'app-pagination-teacher-configuration',
  templateUrl: './pagination-teacher-configuration.component.html',
  styleUrls: []
})
export class PaginationTeacherConfigurationComponent {


  constructor(
    public  teacherConfigurationService: TeacherConfigurationnService,
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

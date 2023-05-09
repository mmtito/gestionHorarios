import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TeacherDtoService } from '../../db/services/teacher-dto.service';

@Component({
  selector: 'app-distibutivo-docente-pagination',
  templateUrl: './distibutivo-docente-pagination.component.html'
})
export class DistibutivoDocentePaginationComponent {

  constructor(
    public teacherDtoService: TeacherDtoService,
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

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-pagination-grade',
  templateUrl: './pagination-grade.component.html',
  styleUrls: []
})
export class PaginationGradeComponent {

  constructor(
    public gradeService : GradeService,
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
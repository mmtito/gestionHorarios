import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CareerService } from '../career.service';

@Component({
  selector: 'app-career-pagination',
  templateUrl: './career-pagination.component.html'
})
export class CareerPaginationComponent  {


  constructor(
    public careerService : CareerService,
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
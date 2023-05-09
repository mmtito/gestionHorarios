import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-pagination-location',
  templateUrl: './pagination-location.component.html',
  styleUrls: []
})
export class PaginationLocationComponent  {

  

  constructor(
    public locationService : LocationService,
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

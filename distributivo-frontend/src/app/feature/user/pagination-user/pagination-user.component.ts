import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pagination-user',
  templateUrl: './pagination-user.component.html',
  styleUrls: []
})
export class PaginationUserComponent {

  constructor(
    public userService : UserService,
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

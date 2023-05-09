import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private route:Router
  ) { }
  
  @Output() clickSide = new EventEmitter();

  logout():void {
    sessionStorage.clear();
    this.route.navigate(["login"]);
  }

  handlerClickSide(){
    this.clickSide.emit()
  }

}

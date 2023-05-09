import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor() { }
  
  @Output() closedrawer = new EventEmitter();

  handlerClickDrawer(){
    this.closedrawer.emit();
  }



}

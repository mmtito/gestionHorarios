import { Component, Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }

  @Output() searchEmittier = new EventEmitter<string>(); 
  @Input() myClass = '';

  public onSearch(value : string){

    this.searchEmittier.emit(value);
  }


}

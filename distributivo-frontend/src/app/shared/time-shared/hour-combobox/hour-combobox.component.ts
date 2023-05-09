import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeService } from 'src/app/core/time.service';
import { hour } from 'src/app/models/time';

@Component({
  selector: 'app-hour-combobox',
  templateUrl: './hour-combobox.component.html',
  styleUrls: ['./hour-combobox.component.css']
})
export class HourComboboxComponent implements OnInit {

  public hours :hour[]= [];
  @Input() hourId :string = '';
  @Output() select = new EventEmitter<string>();

  constructor(
    private timeService : TimeService
  ) { }



  ngOnInit(): void {this.getHours()};
  
  private getHours(){
    this.timeService.getHours().subscribe(
      {
        next : (res)=>this.hours = res,
        error : (_)=>{}
      }
    )
  }

  onSelect(id : string){this.select.emit(id)}
}

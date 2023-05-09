import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TimeService } from 'src/app/core/time.service';
import { day } from 'src/app/models/time';

@Component({
  selector: 'app-day-combobox',
  templateUrl: './day-combobox.component.html',
  styleUrls: ['./day-combobox.component.css']
})
export class DayComboboxComponent implements OnInit {

  public days :day[]= [];
  @Input() dayId :string = '';
  @Output() select = new EventEmitter<string>();

  constructor(
    private timeService : TimeService
  ) { }



  ngOnInit(): void {this.getDays()};
  
  private getDays(){
    this.timeService.getDays().subscribe(
      {
        next : (res)=>this.days = res,
        error : (_)=>{}
      }
    )
  }

  onSelect(id : string){this.select.emit(id)}

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Teacher} from 'src/app/feature/db/models/teacher' 
import { TeacherService } from 'src/app/feature/db/services/teacher.service';

@Component({
  selector: 'app-autocomple-teacher',
  templateUrl: './autocomple-teacher.component.html',
  styleUrls: ['./autocomple-teacher.component.css']
})
export class AutocompleTeacherComponent implements OnInit {
  constructor(
    private teacherService : TeacherService
  ){}

  @Output() select = new EventEmitter()
  myControl = new FormControl();
  filteredOptions : Teacher[] = [];
  ngOnInit() {
    this.myControl.valueChanges.subscribe(
      (value : string)=>{
          if(value.length >= 1){
            this.teacherService.findByName(value).subscribe(
              res=>this.filteredOptions = res
            )
          }
      }
    )
  }

  onSelect(value : string){ this.select.emit(value.split('(')[1].replace(')', ''))};

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GradeService } from 'src/app/feature/grade/grade.service';
import { GradeSelect } from 'src/app/feature/grade/models/gradeSelect';

@Component({
  selector: 'app-autocomplete-grade',
  templateUrl: './autocomplete-grade.component.html',
  styleUrls: ['./autocomplete-grade.component.css']
})
export class AutocompleteGradeComponent implements OnInit {

  constructor(
    private gradeService : GradeService
    ) { }
  
    @Output() select = new EventEmitter()
    myControl = new FormControl();
    filteredOptions : GradeSelect[] = [];
    ngOnInit() {
      this.myControl.valueChanges.subscribe(
        (value : string)=>{
            if(value.length >= 1){
              this.gradeService.findbyNameSelect(value).subscribe(
                res=>this.filteredOptions = res
              )
            }
        }
      )
    }
  
    onSelect(value : string){ this.select.emit(value.split('(')[1].replace(')', ''))};

}

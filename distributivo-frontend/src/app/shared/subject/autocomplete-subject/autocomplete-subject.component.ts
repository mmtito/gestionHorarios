import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubjectSelect } from '../../../feature/subject/subject';
import { SubjectService } from '../../../feature/subject/subject.service';

@Component({
  selector: 'app-autocomplete-subject',
  templateUrl: './autocomplete-subject.component.html',
  styleUrls: ['./autocomplete-subject.component.css']
})
export class AutocompleteSubjectComponent {

  constructor(

    private subjectService : SubjectService
  ) { }

  @Output() select = new EventEmitter()
  myControl = new FormControl();
  filteredOptions : SubjectSelect[] = [];
  ngOnInit() {
    this.myControl.valueChanges.subscribe(
      (value : string)=>{
          if(value.length >= 1){
            this.subjectService.findbyNameSelect(value).subscribe(
              res=>this.filteredOptions = res
            )
          }
      }
    )
  }

  onSelect(value : string){ this.select.emit(value.split('(')[1].replace(')', ''))};

}

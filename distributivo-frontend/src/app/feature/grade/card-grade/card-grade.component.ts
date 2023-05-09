import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeService } from '../grade.service';
import { Grade } from '../models/grade';

@Component({
  selector: 'app-card-grade',
  templateUrl: './card-grade.component.html',
  styleUrls: []
})
export class CardGradeComponent{
  
  @Input() grade : Grade= {
    career : '',
    careerName : '',
    id : '',
    level : null,
    name : '',
    parallel : null,
    status : true,
    workingDay : null
    
  };

  @Output() onDelete = new EventEmitter<string>();

  constructor(

  ) { }



  handlerClickDelete(id : string){
  this.onDelete.emit(id)
  }

  

}

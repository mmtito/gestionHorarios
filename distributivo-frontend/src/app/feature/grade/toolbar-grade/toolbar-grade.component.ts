import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import ResponseErrors from 'src/app/utils/errors';
import { GradeService } from '../grade.service';
import { GradeForCareer } from '../models/gradeForCareer';

@Component({
  selector: 'app-toolbar-grade',
  templateUrl: './toolbar-grade.component.html',
  styleUrls: []
})
export class ToolbarGradeComponent  {

  constructor(
    private gradeService : GradeService,
    private snackbar : MatSnackBar
  ) { }


  search(value : string) : any
   {
    if(value.length == 0)this.gradeService.getGradesByCareer().subscribe(
      {
        next : (res)=>{
          this.setListGrades(res)


        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
      });

    else
    this.gradeService.getGradeByName(value).subscribe(
      {
        next : (res)=>{
          this.setListGrades(res);

        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
      })

  }
  
  private setListGrades(grades : GradeForCareer[]){
    this.gradeService.listGrades = grades

  }
}

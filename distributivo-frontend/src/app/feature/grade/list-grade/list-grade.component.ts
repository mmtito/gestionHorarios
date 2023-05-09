import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import ResponseErrors from 'src/app/utils/errors';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-list-grade',
  templateUrl: './list-grade.component.html',
  styleUrls: []
})
export class ListGradeComponent implements OnInit {


  constructor(
    public gradeService : GradeService,
    private snackbar : MatSnackBar,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getGradesForCareer();
  }

  private getGradesForCareer(){
    this.gradeService.getGradesByCareer().subscribe(
      {
        next : (res)=>{
          this.gradeService.listGrades = res;
        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error));
        }
      });
  }

  onDeleteEmittier(id : string){
  
     const ref = this.dialog.open(DialogComponent,{
      data : {
        message : `Desea eliminar este curso?. 
        Si elimina esta carrera se eliminaran todos los horarios de esta`,
        title : 'Eliminar curso'
      },
      width : '320px'
    });

    ref.afterClosed().subscribe((result)=>{
      if(result)this.delete(id)
    
    })
  
  }

  private delete(id : string){
    this.gradeService.removeGrade(id).subscribe(
      {
        next : (res)=>{
          this.snackbar.open(res.message);
          this.gradeService.reload();
        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
      })
  }

}



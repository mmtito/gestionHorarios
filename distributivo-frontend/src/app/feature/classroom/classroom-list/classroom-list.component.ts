import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { pageable } from 'src/app/models/pageable';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import ResponseErrors from 'src/app/utils/errors';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: [],
})
export class ClassroomListComponent implements OnInit {
  constructor(
    public classRoomService: ClassroomService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.getclassRooms({count :params['count'] || '10', page : params['page'] || '0'});
    });
  }

  public currentId = '';

  private getclassRooms(pageable : pageable) {
    this.classRoomService.getClassrooms(pageable).subscribe(
      {
        next : (res)=> this.classRoomService.listClassrooms = res,
        error : (error)=> {
          
        this.snackbar.open(ResponseErrors.getMessageError(error))
        }
       }
    );
  }

  public delete() {
    this.classRoomService.removeCLassroom(this.currentId).subscribe(
     {
      next : (_)=>{
        this.currentId = '';
        this.snackbar.open('Se ha eliminado el aula correctamente ​✅​');
      },
      error :(error)=>{
        this.snackbar.open(ResponseErrors.getMessageError(error))
      }
     }
 
    );
  }

  public openDialog(id: string) {
    this.setCurrentId(id);

    const ref = this.dialog.open(DialogComponent, {
      data: {
        title: 'Eliminar aula',
        message: `Desea eliminar esta aula \n 
      si elimina esta aula se eliminaran todos los horarios que este anclados con este
      `,
      },
      width: '320px',
    });

    ref.afterClosed().subscribe((result) => {
      if (result) this.delete();
      else this.removeCurrentId();
    });
  }

  public setCurrentId(id: string) {
    this.currentId = id;
  }

  public removeCurrentId() {
    this.currentId = '';
  }
}

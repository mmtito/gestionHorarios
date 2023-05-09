import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { pageable } from 'src/app/models/pageable';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';
import ResponseErrors from 'src/app/utils/errors';
import { TeacherConfigurationnService } from '../teacher-configuration.service';

@Component({
  selector: 'app-teacher-configuration-list',
  templateUrl: './teacher-configuration-list.component.html',
  styleUrls: []
})
export class TeacherConfigurationListComponent {

  constructor(public teacherConfigurationService : TeacherConfigurationnService,
    private route : ActivatedRoute,
    private snackbar : MatSnackBar, 
    private dialog : MatDialog

    ) { }



  public currentId = '';

  private getTeacherConfigurations(opt : pageable){
    this.teacherConfigurationService.getTeacherConfigurations(opt).subscribe(
      {
        next : (res)=>{
          this.teacherConfigurationService.listTeacherConfigurations = res
        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
      })
  }

  public delete(){
    this.teacherConfigurationService.removeTeacherConfiguration(this.currentId).subscribe(
      {
        next : (_)=>{
          this.removeFromList(this.currentId)
          this.currentId = ''
          this.snackbar.open('Se ha eliminado la configuracion correctamente ​✅​');

        },
        error : (error)=>{
         this.snackbar.open(ResponseErrors.getMessageError(error));
        }
      }
    )
  }

  public openDialog(id: string) {
    this.setCurrentId(id);

    const ref = this.dialog.open(DialogComponent, {
      data: {
        title: 'Eliminar configuracion',
        message: `Desea eliminar esta configuracion \n 
      si elimina esta configuracion todas las aulas que estbaban en esta no tendran configuracion :(
      `,
      },
      width: '320px',
    });

    ref.afterClosed().subscribe
    ((result) => {
      if (result) this.delete();
      else this.removeCurrentId();
    });
  }

  public setCurrentId(id : string){
    this.currentId = id;
  }

  public removeCurrentId(){
    this.currentId = '';
  }

  private removeFromList(id :string){
    this.teacherConfigurationService.listTeacherConfigurations.teacherConfigurations =
    this.teacherConfigurationService.listTeacherConfigurations.teacherConfigurations
    .filter((val)=>val.id != parseInt(id))
  }

}

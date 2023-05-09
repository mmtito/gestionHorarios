import { Component, OnInit } from '@angular/core';
import { Career } from '../models/career';
import { CareerService } from '../career.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog/dialog.component';

@Component({
  selector: 'app-list-career',
  templateUrl: './list-career.component.html',
  styleUrls: [],
})
export class ListCareerComponent implements OnInit {
  constructor(
    private careerService: CareerService,
    private snackbar: MatSnackBar, 
    private dialog : MatDialog
  ) {}

  public listCareers: Career[] = [];

  ngOnInit(): void {
    this.getCareers();
  }

  private currentId: string = '';

  private getCareers() {
    this.careerService.findAll().subscribe((res) => {
      res.forEach((value, index) => {
        res[index].img = this.resizeImage(value.img);
      });

      this.listCareers = res;
    });
  }

  setIdDelete(id: string) {
    this.currentId = id;
  }

  private resizeImage(link: any) {
    let array = link.split('/');
    array.splice(6, 0, 'w_300,h_150,c_scale/');

    return array.join().replaceAll(',', '/');
  }

  delete() {
    this.careerService.delete(this.currentId).subscribe(
      () => {
        this.snackbar.open('Se elimino la carrera correctamente ✅');
        this.removeItemdOfList();
      },
      () => this.snackbar.open('Hubo un error al eliminar la carrera ❌')
    );
  }
  
  public openDialog(id : string){
    this.setIdDelete(id);
    const ref = this.dialog.open(DialogComponent,{
      data : {
        message : `Desea eliminar esta carrera?\n
        Si elimina esta carrera se eliminaran todas las relaciones con esta `,
        title : 'Eliminar carrera'
      },
      width : '320px'
    });
    ref.afterClosed().subscribe((result)=>{
      if(result)this.delete()
      else this.removeCurrentId()
    })

  }

  private removeItemdOfList() {
    this.listCareers = this.listCareers.filter((v) => v.id != this.currentId);
    this.removeCurrentId();
  }

  private removeCurrentId() {
    this.currentId = '';
  }
}

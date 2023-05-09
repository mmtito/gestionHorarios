import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../../db/models/teacher';
import { TeacherService } from '../../db/services/teacher.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-teacher',
  templateUrl: './modal-teacher.component.html'
})
export class ModalTeacherComponent implements OnChanges {

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private matSnackBar : MatSnackBar
  ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.validateId()) this.findById(this.currentId);
  }

  @Input () currentId = 0;

  currentEntity: Teacher = {
    id: 0,
    name: '',
    lastname: '',
    dni: '',
    email: '',
    color: '',
    archived: true,
  }


  public validateId () {
    return Boolean (this.currentId)
  }

  public findById(id: number): void {
    this.teacherService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  public save(): void {
    this.teacherService.save(this.currentEntity).subscribe(
      () => {
        this.currentEntity = {
          id: 0,
          name: "",
          lastname: "",
          dni: "",
          color: "",
          email: "",
          archived: true
        };
        this.matSnackBar.open('Proceso Exitoso ✔')
        this.router.navigate(["/layout/teacher-list"]);
        (()=>{
          location.reload();
        })()
      }
    )
  }
  cancelar() {
    this.matSnackBar.open('No se guardaron Cambios ✘')
  }

}

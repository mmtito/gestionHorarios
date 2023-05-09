import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from '../../db/models/subject';
import { SubjectService } from '../../db/services/subject.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignature-new',
  templateUrl: './asignature-new.component.html',
})
export class AsignatureNewComponent implements OnChanges {

  constructor(
    private subjectService: SubjectService,
    private matSnackBar: MatSnackBar,
    private route: Router
  ) { }

  @Input() currentId = 0;

  currentEntity: Subject = {
    id: 0,
    code: '',
    name: '',
    laboratoryHours: 0,
    theoreticalHours: 0,
    career: 0,
    status: true
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.validateId()) this.findById(this.currentId);

  }

  private validateId() {
    return Boolean(this.currentId);
  }

  public findById(id: number): void {
    this.subjectService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        console.log(response)
      }
    )
  }

  public save(): void {
    this.subjectService.save(this.currentEntity).subscribe(
      (response) => {
        this.currentEntity = {
          id: 0,
          code: '',
          name: '',
          laboratoryHours: 0,
          theoreticalHours: 0,
          career: 0,
          status: true
        };
        this.matSnackBar.open('Proceso Exitoso ✔');
        this.route.navigate(['/layout/asignature']);
        (()=> {
          location.reload();
        })()
      }
    )
  }

  public cancelar() {
    this.matSnackBar.open('No se guardaron Cambios ✘');
    this.clear();
  }

  public clear() {
    this.currentEntity = {
      id: 0,
      code: '',
      name: '',
      laboratoryHours: 0,
      theoreticalHours: 0,
      status: true,
      career: 0
    }
  }

}

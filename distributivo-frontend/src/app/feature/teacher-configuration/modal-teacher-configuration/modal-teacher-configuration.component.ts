import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import ResponseErrors from 'src/app/utils/errors';
import { TeacherConfigurationnService } from '../teacher-configuration.service';

@Component({
  selector: 'app-modal-teacher',
  templateUrl: './modal-teacher-configuration.component.html',
  styleUrls: []
})
export class ModalTeacherConfigurationComponent implements OnChanges {

  constructor(private teacherConfigurationService: TeacherConfigurationnService,
    private router: Router,
    private snackbar: MatSnackBar) { }

  @Input() currentId = '';
  loading = false;

  public teacherConfiguration = new FormGroup({
    id: new FormControl(''),
    teacher : new FormControl('', Validators.required),
    hour : new FormControl('', Validators.required),
    day : new FormControl('', Validators.required),

  })


  ngOnChanges(changes: SimpleChanges) {
    if (!this.validateId()) this.findById();
  }

  private findById() {
  

    this.teacherConfigurationService.getTeacherConfiguration(this.currentId).subscribe(
      {
        next: (res) => {
          this.teacher.setValue(res)
        },
        error: (error) => {
          this.snackbar.open(ResponseErrors.getMessageError(error))

        }
      })
  }

  save(): any {
    if (!this.canSaveOrUpdate()) return;
    this.loading = true;

    return this.teacherConfigurationService.saveTeacherConfiguration(this.teacherConfiguration.value).subscribe(
      {
        next: (_) => {
          this.snackbar.open("Se ha guardado la ubicacion correctamente ​✅​");
          this.reload();
        },
        error: (error) => {
          this.snackbar.open(ResponseErrors.getMessageError(error));
          this.loading = false;
        }
      })
  }


  cleanConfiguration() { this.teacherConfiguration.reset()}
  addTeacher(value : string){ this.teacher = value };
  addHour(value : any){ this.hour = value };
  addDay(value : any){ this.day = value };

  private reload() {
    this.router.navigateByUrl('/layout', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/layout/teacher-configuration/']);
    });
  }

  private validateId() {

    return (!this.currentId || this.currentId.length == 0);

  }

  private canSaveOrUpdate() {return (this.teacher.valid && !this.loading)}

  get id(): any { return this.teacherConfiguration.get('id') };
  get teacher(): any {return this.teacherConfiguration.get('teacher') };
  get day(): any { return this.teacherConfiguration.get('day') };
  get hour(): any { return this.teacherConfiguration.get('hour') };
  
  set id(value: any) { this.teacherConfiguration.patchValue({ id: value }) };
  set teacher(value: any) { this.teacherConfiguration.patchValue({ teacher: value }) };
  set day(value: any) { this.teacherConfiguration.patchValue({ day: value }) };
  set hour(value: any) { this.teacherConfiguration.patchValue({ hour: value }) };


}

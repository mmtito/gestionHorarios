import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import ResponseErrors from 'src/app/utils/errors';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-modal-grade',
  templateUrl: './modal-grade.component.html',
  styleUrls: [],
})
export class ModalGradeComponent implements OnInit {
  constructor(
    private gradeService: GradeService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}
  

  currentId = '';
  loading = false;

   grade = new FormGroup({
    id : new FormControl(''),
    name : new FormControl('', [Validators.minLength(4), Validators.required]),
    career : new FormControl('', Validators.required),
    level : new FormControl('', Validators.required),
    workingDay : new FormControl('',Validators.required),
    parallel : new FormControl('',Validators.required)

  })

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentId = params['g'] || '';

      if (!this.validateId()) this.findById();
    });
  }




  private findById() {
    this.gradeService.getGrade(this.currentId).subscribe(
      {
        next : (res)=>{
          this.grade.setValue(res);
        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
      });
  }

  public saveOrUpdate() {

    if(!this.canSaveOrUpdate()) return;

    this.loading = true;

    if (this.validateId()) this.save();
    else this.update();
  }

  private save(): any {

    return this.gradeService.saveGrade(this.grade.value).subscribe(
      {
        next : (_)=>{
          this.snackbar.open('Se guardo correctamente el curso ✅');
          this.gradeService.reload();
        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error));
          this.loading = false;

        }
      });
  }

  private update() {
    return this.gradeService.updateGrade(this.grade.value).subscribe(
      {
        next : ()=>{
          this.snackbar.open('Se edito correctamente el curso ✅');
          this.gradeService.reload();
        },
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error));
          this.loading = false;
        }
      });
  }

  canSaveOrUpdate(){return ( this.grade.valid && !this.loading )}
 
  clearGrade() {this.grade.reset()}

  private validateId() {return !this.currentId || this.currentId.length == 0}

  addCareer(value: string) {this.career = value}


  // Setters and getter from grade form

  //getters

  get id():any{return this.grade.get('id')}
  get name():any{return this.grade.get('name')}
  get career():any{return this.grade.get('career')}
  get level():any{return this.grade.get('level')}
  get workingDay():any{return this.grade.get('workingDay')}
  get parallel():any{return this.grade.get('parallel')}
  
  //setters

  set id(value:any){ this.grade.patchValue({id:value})}
  set name(value:any){ this.grade.patchValue({name:value})}
  set career(value:any){ this.grade.patchValue({career:value})}
  set level(value:any){ this.grade.patchValue({level:value})}
  set workingDay(value:any){ this.grade.patchValue({workingDay:value})}
  set parallel(value:any){ this.grade.patchValue({parallel:value})}

}

import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import ResponseErrors from 'src/app/utils/errors';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-modal-classroom',
  templateUrl: './modal-classroom.component.html',
  styleUrls: []
})
export class ModalClassroomComponent implements OnChanges{
   
  constructor( private classroomService : ClassroomService,
    private router : Router,
    private snackbar : MatSnackBar ) { }

    @Input() currentId = '';

    loading : boolean = false;
    
    ngOnChanges(changes: SimpleChanges) {
      if(!this.validateId()) this.findById();
    }


  public classroom = new FormGroup({
    id : new FormControl(''),
    name : new FormControl('', [Validators.minLength(4),Validators.required]),
    //code : new FormControl('', [Validators.minLength(2), Validators.required]),
    capacity : new FormControl(0, [Validators.minLength(0), Validators.required]),
    location : new FormControl(null),
    type :new FormControl('', Validators.minLength(1)),
    status : new FormControl(false),
    description : new FormControl('', [ Validators.minLength(10),Validators.required])
  });

  private findById(){
    this.changeLoading(true)
    this.classroomService.getCLassroom(this.currentId).subscribe(
     {
       next : (res)=>{ 
        this.classroom.setValue(res);
        this.loading =false
       },
       error : (error)=> {
        this.snackbar.open(ResponseErrors.getMessageError(error));
        this.loading =false 
      }
     })
  }

  public cleanClassroom(){
    this.classroom.reset()
  }

  public saveOrUpdate(){

    if(!this.canSaveOrUpdate()) return;
    
    this.loading = true
    
    if(this.validateId())this.save();
    else this.update();
  }

  private canSaveOrUpdate(){
    return (!this.loading && this.classroom.valid)
  }
  
  private save() : any {

  
     
      return this.classroomService.saveCLassroom(this.classroom.value).subscribe(
        {
          next : (_)=>{
            this.snackbar.open("Se ha guardado el aula correctamente ​✅​");
            this.reload();

          },
          error : (error)=>{
            this.snackbar.open(ResponseErrors.getMessageError(error))
            this.loading = false
          }
        }
      )
  }

  private update(){
     return this.classroomService.updateCLassroom(this.classroom.value).subscribe(
      {
        next : (_)=>{
          this.snackbar.open("Se ha editado el aula correctamente ​✅​");
          this.reload();

        },
        error : (error)=>{
         this.loading = false;
          this.snackbar.open(ResponseErrors.getMessageError(error))
         
        }
      })
  }

  private changeLoading(state : boolean){
    this.loading = state
  }


  private reload(){
    this.router.navigateByUrl('/layout', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/layout/classroom/']);
  }); 
  }

  private validateId(){

    return !this.currentId;

  }
  //eventEmittier capturer
  addLocation(value : string){this.location = value}
  addType(id : string){this.type = id}

  // getter and setters form classroom formControl

  // getters
  get name():any{return this.classroom.get('name')}
  get id():any{return this.classroom.get('id')}
  get code():any{return this.classroom.get('code')}
  get capacity():any{return this.classroom.get('capacity')}
  get location():any{return this.classroom.get('location')}
  get type():any{return this.classroom.get('type')}
  get description():any{ return this.classroom.get('description')}
  
  // setters
  set name(value :any){ this.classroom.patchValue({name : value})}
  set id(value : any){ this.classroom.patchValue({id: value})}
  set code(value : any){ this.classroom.patchValue({code: value})}
  set capacity(value : any){ this.classroom.patchValue({capacity: value})}
  set location(value : any){ this.classroom.patchValue({location: value})}
  set type(value : any){ this.classroom.patchValue({type: value})}
  set description(value : any){  this.classroom.patchValue({description: value})}

}

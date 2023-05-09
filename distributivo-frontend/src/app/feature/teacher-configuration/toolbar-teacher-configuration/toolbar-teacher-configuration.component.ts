import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import ResponseErrors from 'src/app/utils/errors';
import { TeacherConfigurationnService } from '../teacher-configuration.service';
import { ActivatedRoute } from '@angular/router';
import { pageable } from 'src/app/models/pageable';

@Component({
  selector: 'app-toolbar-teacher-configuration',
  templateUrl: './toolbar-teacher-configuration.component.html',
  styleUrls: []
})
export class ToolbarTeacherConfigurationComponent implements OnInit{

  private input : string = '';

  constructor(
    private teacherConfigurationService : TeacherConfigurationnService,
    private snackbar : MatSnackBar,
    private activeRouted : ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activeRouted.queryParams.subscribe(params=>{
      this.findByTeacher({count : params['count'] || '10', page : params['page'] || '0'})

    })
    
  }

  search(value : string){
    this.input = value;
    if(this.input.length < 1) return;
    this.teacherConfigurationService.getConfigurationByTeacher(value, {count : '10',page : '0'})
    .subscribe(
      {
        next : (res)=> this.teacherConfigurationService.listTeacherConfigurations = res,
        error : (error)=>{
          this.snackbar.open(ResponseErrors.getMessageError(error))
        }
      })
  }

  private findByTeacher(opt : pageable){
    if(this.input.length < 1) return
    this.teacherConfigurationService.getConfigurationByTeacher(this.input,opt).subscribe(
      {
        next : (res)=> this.teacherConfigurationService.listTeacherConfigurations = res,
        error : (err)=> this.snackbar.open(ResponseErrors.getMessageError(err))
      }
    )}


}
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../../db/models/teacher';
import { TeacherService } from '../../db/services/teacher.service';
import { SubjectService } from '../../db/services/subject.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html'
})
export class TeacherListComponent implements AfterViewInit {

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private subjectService : SubjectService,

  ) { }

  teacherList: Teacher[] = [];

  ngAfterViewInit():void { 
    this.findAll();
    this.dataSource.paginator = this.paginator

  
  }

  // ngOnInit(): void {
  //  this.activatedRoute.paramMap.subscribe(
  //    (params) => {
  //      if(params.get("id")){
  //        this.findById(parseInt(params.get("id")!))
  //      }
  //    }
  //  )
  // }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns : string[] = ['id', 'dni', 'name', 'lastname', 'color', 'email', 'editar'];
  dataSource = new MatTableDataSource<Teacher>([]);

  currentEntity : Teacher = {
    id : 0,
    name : "",
    lastname : "",
    dni : "",
    color : "",
    email : "",
    archived :false
  };

  public findAll(): void {
    this.teacherService.findAll().subscribe(
      (response) => {
        this.dataSource.data = response;
        //this.teacherList = response
        console.log(response)
      }
    )
  }

  public findByName(term: string): void {
    if (term.length >= 2) {
      this.teacherService.findByName(term).subscribe(
        (res) => this.dataSource.data = res
      )
    }
    if (term.length === 0 ){
      this.findAll()
    }
  }

  public findById(id : number ) : void {
    this.teacherService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  currentId = 0;

  public setCurrentId(id : number){
    this.currentId = id;
    console.log(id)
  }
  
}




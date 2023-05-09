import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from '../db/models/subject';
import { SubjectService } from '../db/services/subject.service';
import { ActivatedRoute, Route } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-asignature',
  templateUrl: './asignature.component.html'
})
export class AsignatureComponent implements AfterViewInit {

  displayedColumns : string[] = ['id', 'code', 'name', 'laboratoryHours', 'theoreticalHours', 'editar'];
  dataSource = new MatTableDataSource<Subject>([]);

  constructor(
    private subjectService: SubjectService,
    //private activatedRoute: ActivatedRoute
  ) { }

  @ViewChild(MatPaginator)
  paginator! : MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }
  // ngOnInit(): void {
  //   this.findAll();
  // }

  subjectList: Subject[] = [];

  public findAll(): void {
    this.subjectService.findAll().subscribe(
      (response) => {
        this.dataSource.data = response;
        //console.table(response);
        //this.subjectList = response
      }
    )
  }

  public currentEntity : Subject = {
    id : 0,
    code : '',
    name : '',
    laboratoryHours : 0,
    theoreticalHours : 0,
    career : 0,
    status: true
  }

  public findById (id : number){
    this.subjectService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response  ;
      }
    )
  }

  public currentId = 0;

  public setCurrentId (id : number) {
    this.currentId = id;
    console.log(id)
  }

  public findByName (term : string) {
    if(term.length >= 2){
      this.subjectService.findByName(term).subscribe(
        //(response) => this.subjectList = response;
        (response) => {
          this.dataSource.data = response;
        }
      )
    }
    if(term.length === 0){
      this.findAll();
    }
  }

}

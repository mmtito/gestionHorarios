import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Teacher } from '../../db/models/teacher';
import { TeacherService } from '../../db/services/teacher.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-teacher-list-false',
  templateUrl: './teacher-list-false.component.html',
})
export class TeacherListFalseComponent implements AfterViewInit {

  constructor(
    private teacherService: TeacherService,
  ) { }
  
  @ViewChild(MatPaginator) paginator! : MatPaginator
  displayedColumns : string[] = ['id', 'dni', 'name', 'lastname', 'color', 'email', 'editar']
  dataSource = new MatTableDataSource<Teacher>([])

  ngAfterViewInit(): void {
    this.findAllFalse();
    this.dataSource.paginator = this.paginator
  }



  teacherListFalse: Teacher[] = [];
  public findAllFalse(): void {
    this.teacherService.findAllFalse().subscribe(
      (response) => this.dataSource.data = response
    )
  }
}

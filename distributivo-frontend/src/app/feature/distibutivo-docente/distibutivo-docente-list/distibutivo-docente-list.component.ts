import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TeacherDtoService } from '../../db/services/teacher-dto.service';
import { TeacherDto } from '../../db/models/teacherDto';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-distibutivo-docente-list',
  templateUrl: './distibutivo-docente-list.component.html'
})
export class DistibutivoDocenteListComponent implements AfterViewInit {

  constructor(
    private teacherDtoService: TeacherDtoService,
    private activatedRoute: ActivatedRoute
  ) { }

  // ELEMENT_DATA: TeacherDto[] = [
  //   {
  //     id: 5,
  //     teacherid: 5,
  //     teacherCedula: 'string',
  //     teacherNombre: 'string',
  //     teacherApellido: 'string',
  //     gradeid: 5,
  //     cursoName: 'string',
  //     subjectid: 5,
  //     asignaturaName: 'string',
  //     asignaturaCode: 'string',
  //     perioodid: 5,
  //     periodName: 'string',
  //     careeid: 5,
  //     careerName: 'string',
  //     careerCode: 'string'
  //   },
  //   {
  //     id: 5,
  //     teacherid: 5,
  //     teacherCedula: 'string',
  //     teacherNombre: 'string',
  //     teacherApellido: 'string',
  //     gradeid: 5,
  //     cursoName: 'string',
  //     subjectid: 5,
  //     asignaturaName: 'string',
  //     asignaturaCode: 'string',
  //     perioodid: 5,
  //     periodName: 'string',
  //     careeid: 5,
  //     careerName: 'string',
  //     careerCode: 'string'
  //   },
  //   {
  //     id: 5,
  //     teacherid: 5,
  //     teacherCedula: 'string',
  //     teacherNombre: 'string',
  //     teacherApellido: 'string',
  //     gradeid: 5,
  //     cursoName: 'string',
  //     subjectid: 5,
  //     asignaturaName: 'string',
  //     asignaturaCode: 'string',
  //     perioodid: 5,
  //     periodName: 'string',
  //     careeid: 5,
  //     careerName: 'string',
  //     careerCode: 'string'
  //   },
  //   {
  //     id: 5,
  //     teacherid: 5,
  //     teacherCedula: 'string',
  //     teacherNombre: 'string',
  //     teacherApellido: 'string',
  //     gradeid: 5,
  //     cursoName: 'string',
  //     subjectid: 5,
  //     asignaturaName: 'string',
  //     asignaturaCode: 'string',
  //     perioodid: 5,
  //     periodName: 'string',
  //     careeid: 5,
  //     careerName: 'string',
  //     careerCode: 'string'
  //   },
  //   {
  //     id: 5,
  //     teacherid: 5,
  //     teacherCedula: 'string',
  //     teacherNombre: 'string',
  //     teacherApellido: 'string',
  //     gradeid: 5,
  //     cursoName: 'string',
  //     subjectid: 5,
  //     asignaturaName: 'string',
  //     asignaturaCode: 'string',
  //     perioodid: 5,
  //     periodName: 'string',
  //     careeid: 5,
  //     careerName: 'string',
  //     careerCode: 'string'
  //   },
  //   {
  //     id: 5,
  //     teacherid: 5,
  //     teacherCedula: 'string',
  //     teacherNombre: 'string',
  //     teacherApellido: 'string',
  //     gradeid: 5,
  //     cursoName: 'string',
  //     subjectid: 5,
  //     asignaturaName: 'string',
  //     asignaturaCode: 'string',
  //     perioodid: 5,
  //     periodName: 'string',
  //     careeid: 5,
  //     careerName: 'string',
  //     careerCode: 'string'
  //   }

  // ]

  displayedColumns: any[] = [
    'teacherCedula',
    'teacherNombre',
    'teacherApellido',
    'cursoName',
    'asignaturaName',
    'asignaturaCode',
    'periodName',
    'careerName',
    'careerCode',
    'editar'
  ];
  dataSource = new MatTableDataSource<TeacherDto>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.findAll();
    this.dataSource.paginator = this.paginator;

    // this.activatedRoute.paramMap.subscribe(
    //   (params) => {
    //     if (params.get("id")) {
    //       this.findById(parseInt(params.get("id")!))
    //     }
    //   }
    // )
  }

  public teacherDtoList: TeacherDto[] = []

  public findAll(): void {
    this.teacherDtoService.findAll().subscribe(
      (response) => this.dataSource.data = response
    )
  }

  currentEntity: TeacherDto = {
    id: 0,
    teacherNombre: "",
    teacherid: 0,
    teacherCedula: '',
    teacherApellido: '',
    gradeid: 0,
    cursoName: '',
    subjectid: 0,
    asignaturaName: '',
    asignaturaCode: '',
    perioodid: 0,
    periodName: '',
    careeid: 0,
    careerName: '',
    careerCode: ''
  }

  public findById(id: number): void {
    this.teacherDtoService.findByTeacherId(id).subscribe(
      (response) => this.teacherDtoList = response
    )
  }

  public findByTeacherDni(dni: string): void {
    if (dni.length >= 2) {
      this.teacherDtoService.findByTeacherDni(dni).subscribe(
        (response) => this.dataSource.data = response
      )
    }
    if (dni.length === 0) {
      this.findAll()
    }
  }

  public findByTeacherName(name: string) {
    if (name.length >= 2) {
      this.teacherDtoService.findByTeacherName(name).subscribe(
        (response) => this.dataSource.data = response
      )
    }
    if (name.length === 0) {
      this.findAll();
    }
  }

  public findByTeacherLastname(lastname: string): void {
    if (lastname.length >= 2) {
      this.teacherDtoService.findByTeacherLastname(lastname).subscribe(
        (response) => this.dataSource.data = response
      )
    }
    if (lastname.length === 0) {
      this.findAll();
    }
  }

  public findByPeriodoName(periodo: string): void {
    this.teacherDtoService.findByPeriodName(periodo).subscribe(
      (response) => this.dataSource.data = response
    )
    if (periodo.length === 0) {
      this.findAll()
    }
  }

  public findByCareerName(career: string): void {
    this.teacherDtoService.findByCareerName(career).subscribe(
      (response) => this.dataSource.data = response
    )
    if (career.length === 0) {
      this.findAll();
    }
  }

}

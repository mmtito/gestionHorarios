import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AsignatureComponent } from '../asignature.component';

@Component({
  selector: 'app-asignature-paginator',
  templateUrl: './asignature-paginator.component.html',
})
export class AsignaturePaginatorComponent implements OnInit {

  constructor() { }

  @ViewChild(MatPaginator)
  paginator! : MatPaginator;
  ngOnInit(): void {
  }

}

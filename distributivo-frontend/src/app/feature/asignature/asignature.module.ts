import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsignatureComponent } from './asignature.component';
import { AsignatureToolbarComponent } from './asignature-toolbar/asignature-toolbar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AsignaturePaginatorComponent } from './asignature-paginator/asignature-paginator.component';
import { AsignatureImportComponent } from './asignature-import/asignature-import.component';
import { AsignatureNewComponent } from './asignature-new/asignature-new.component';

const routes: Route[] = [
  { path: '', component: AsignatureComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
  ],
  exports: [],
  declarations: [
    AsignatureComponent,
    AsignatureToolbarComponent,
    AsignaturePaginatorComponent,
    AsignatureImportComponent,
    AsignatureNewComponent
    
  ],
  providers: [],
}) export class AsignatureModule { }

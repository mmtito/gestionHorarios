import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GradeComponent } from './grade.component';
import { ToolbarGradeComponent } from './toolbar-grade/toolbar-grade.component';
import { ModalGradeComponent } from './modal-grade/modal-grade.component';
import { ListGradeComponent } from './list-grade/list-grade.component';
import { CardGradeComponent } from './card-grade/card-grade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedCareerModule } from 'src/app/shared/career/career.shared.module';
import { ToolbarSharedModule } from 'src/app/shared/toolbar/toolbar.shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginationGradeComponent } from './pagination-grade/pagination-grade.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BottomSheetGrade, BottomSheetOverviewGrade } from './upload-modal-location/upload-modal-location.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MaterialExampleModule } from 'src/app/material.module';

const routes: Route[] = [
  {
    path: '',
    component: GradeComponent,
  },
  {
    path: ':id',
    component: GradeComponent,
  },
];

@NgModule({
  imports: [
  RouterModule.forChild(routes), 
  FormsModule, 
  CommonModule, 
  SharedCareerModule,
  ToolbarSharedModule, 
  MaterialExampleModule],
  exports: [],
  declarations: [
    GradeComponent,
    BottomSheetOverviewGrade,
    BottomSheetGrade,
    ToolbarGradeComponent,
    ModalGradeComponent,
    ListGradeComponent,
    CardGradeComponent,
    PaginationGradeComponent
  ],
  providers: [],
})
export class GradeModule {}

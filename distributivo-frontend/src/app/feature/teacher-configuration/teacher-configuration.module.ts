import { NgModule } from '@angular/core';

import { TeacherConfigurationListComponent } from './teacher-configuration-list/teacher-configuration-list.component';
import { ToolbarTeacherConfigurationComponent } from './toolbar-teacher-configuration/toolbar-teacher-configuration.component';
import { BottomSheetConfiguration, BottomSheetOverviewConfiguration } from './upload-modal-teacher-configuration/upload-modal-teacher-configuration.component';
import { ModalTeacherConfigurationComponent } from './modal-teacher-configuration/modal-teacher-configuration.component';
import { Route, RouterModule } from '@angular/router';
import { TeacherConFigurationComponent } from './teacher-configuration.component';
import { PaginationTeacherConfigurationComponent } from './pagination-teacher-configuration/pagination-teacher-configuration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogSharedModule } from 'src/app/shared/dialog/dialog.shared.module';
import { ToolbarSharedModule } from 'src/app/shared/toolbar/toolbar.shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedTeacherModule } from 'src/app/shared/teacher/teacher.shared.module';
import { TeacherPaginationComponent } from './teacher-pagination/teacher-pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialExampleModule } from 'src/app/material.module';
import { TimeSharedModule } from 'src/app/shared/time-shared/time-shared.module';

const routes: Route[] = [
  {
    path: '', component: TeacherConFigurationComponent,
  },
  {
    path: ':id', component: TeacherConFigurationComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    DialogSharedModule,
    ToolbarSharedModule,
    SharedTeacherModule,
    MaterialExampleModule,
    TimeSharedModule

  ],
  exports: [],
  declarations: [
    ToolbarTeacherConfigurationComponent,
    TeacherConfigurationListComponent,
    PaginationTeacherConfigurationComponent,
    TeacherConFigurationComponent,
    ModalTeacherConfigurationComponent,
    BottomSheetOverviewConfiguration,
    BottomSheetConfiguration,
    TeacherPaginationComponent

  ],
  providers: [],
})
export class LocationModule { }

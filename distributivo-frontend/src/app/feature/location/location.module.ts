import { NgModule } from '@angular/core';

import { LocationListComponent } from './location-list/location-list.component';
import { ToolbarLocationComponent } from './toolbar-location/toolbar-location.component';
import { BottomSheetClassroom, BottomSheetOverviewLocation } from './upload-modal-location/upload-modal-location.component';
import { ModalLocationComponent } from './modal-location/modal-location.component';
import { Route, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { PaginationLocationComponent } from './pagination-location/pagination-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogSharedModule } from 'src/app/shared/dialog/dialog.shared.module';
import { ToolbarSharedModule } from 'src/app/shared/toolbar/toolbar.shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MaterialExampleModule } from 'src/app/material.module';

const routes: Route[] = [
  {
    path: '', component: LocationComponent,
  },
  {
    path: ':id', component: LocationComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    DialogSharedModule,
    ToolbarSharedModule,
    MaterialExampleModule

  ],
  exports: [],
  declarations: [
    LocationListComponent,
    ToolbarLocationComponent,
    BottomSheetClassroom,
    BottomSheetOverviewLocation,
    ModalLocationComponent,
    LocationComponent,
    PaginationLocationComponent,
    LocationComponent,

  ],
  providers: [],
})
export class LocationModule { }

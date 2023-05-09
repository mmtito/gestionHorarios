import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { LocationComboboxComponent } from '../location/locationcombobox/location-combobox.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomComponent } from './classroom.component';
import { ModalClassroomComponent } from './modal-classroom/modal-classroom.component';
import { PaginationClassroomComponent } from './pagination-classroom/pagination-classroom.component';
import { ToolbarClassroomComponent } from './toolbar-classroom/toolbar-classroom.component';
import { BottomSheetClassroom, BottomSheetOverviewClassroom } from './upload-modal-classroom/upload-modal-classroom.component';
import { ClassroomTypeComboboxComponent } from './classroom-type-combobox/classroom-type-combobox.component';
import { ToolbarSharedModule } from 'src/app/shared/toolbar/toolbar.shared.module';
import { MaterialExampleModule } from 'src/app/material.module';


const routes: Route[] = [
    {
        path: '', component: ClassroomComponent,
    },
    {
        path: ':id', component: ClassroomComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes), 
        FormsModule, CommonModule, 
        ToolbarSharedModule,
        MaterialExampleModule 
        
    ],
    exports: [],
    declarations: [ClassroomComponent,
        ToolbarClassroomComponent,
        ClassroomListComponent,
        BottomSheetClassroom,
        BottomSheetOverviewClassroom,
        ModalClassroomComponent,
        PaginationClassroomComponent,
        LocationComboboxComponent,
        ClassroomTypeComboboxComponent,
    ],
    providers: [],
})
export class ClassroomModule { }

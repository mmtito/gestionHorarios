import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ModalTeacherComponent } from './modal-teacher/modal-teacher.component';
import { SharedTeacherModule } from 'src/app/shared/teacher/teacher.shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialExampleModule } from 'src/app/material.module';
import { TeacherListFalseComponent } from './teacher-list-false/teacher-list-false.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherPaginationComponent } from './teacher-pagination/teacher-pagination.component';
import { TeacherComponent } from './teacher.component';
import { ToolbarTeacherComponent } from './toolbar-teacher/toolbar-teacher.component';
import { BottomSheetOvgerviewTeacher, BottomSheetTeacher } from './upload-modal-teacher/upload-modal-teacher.component';
import { MatTableModule } from '@angular/material/table';



const routes: Route[] = [
    { path: 'false', component: TeacherListFalseComponent },
    { path: '', component: TeacherComponent },
    { path: ':id', component: TeacherComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        MaterialExampleModule,
        SharedTeacherModule,
        MatPaginatorModule,
        MatTableModule
    ],
        
    exports: [],
    declarations: [
        TeacherComponent,
        ModalTeacherComponent,
        TeacherListComponent,
        ToolbarTeacherComponent,
        TeacherPaginationComponent,
        BottomSheetOvgerviewTeacher,
        BottomSheetTeacher,
        TeacherListFalseComponent

    ],
    providers: [],
})
export class TeacherModule { }

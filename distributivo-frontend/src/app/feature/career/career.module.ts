import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedCareerModule } from 'src/app/shared/career/career.shared.module';
import { CareerModalComponent } from './career-modal/career-modal.component';

import { CareerComponent } from './career.component';
import { CardCareerComponent } from './card-career/card-career.component';
import { ListCareerComponent } from './list-career/list-career.component';
import { DialogSharedModule } from 'src/app/shared/dialog/dialog.shared.module';
import { CareerPaginationComponent } from './career-pagination/career-pagination.component';
import { CareerToolbarComponent } from './career-toolbar/career-toolbar.component';
import { MaterialExampleModule } from 'src/app/material.module';
import { CareerListFalseComponent } from './career-list-false/career-list-false.component';
import { SubjectsCareersComponent } from './subjects-careers/subjects-careers.component';
import { SubjectsCareersPaginationsComponent } from './subjects-careers/subjects-careers-paginations/subjects-careers-paginations.component';
import { SubjectsCareersToolbarComponent } from './subjects-careers/subjects-careers-toolbar/subjects-careers-toolbar.component';

const routes: Route[] = [
    {
        path: '',
        component: CareerComponent
    },
    {
        path: 'false',
        component: CareerListFalseComponent
    },
    {
        path: 'subjectsCareers',
        component: SubjectsCareersComponent
    }
]

@NgModule({
    imports: [
    RouterModule.forChild(routes), 
    CommonModule,
    FormsModule, 
    SharedCareerModule,
    DialogSharedModule, 
    MaterialExampleModule
],
    exports: [],
    declarations: [CareerComponent, 
    CareerModalComponent, 
    CardCareerComponent, 
    ListCareerComponent, 
    CareerPaginationComponent,
    CareerToolbarComponent,
    CareerListFalseComponent,
    SubjectsCareersComponent,
    SubjectsCareersPaginationsComponent,
    SubjectsCareersToolbarComponent],
    providers: [],
    bootstrap : [ListCareerComponent ]
})
export class CareerModule { }

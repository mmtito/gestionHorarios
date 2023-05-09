import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Route[] = [
    {
        path: '',
        component: LoginComponent
    }
]

@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule, 
        RouterModule.forChild(routes),],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }

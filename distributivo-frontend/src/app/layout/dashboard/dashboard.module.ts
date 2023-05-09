import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes : Route[] =[
    {
        path : '',
        component : DashboardComponent
    }
] 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }

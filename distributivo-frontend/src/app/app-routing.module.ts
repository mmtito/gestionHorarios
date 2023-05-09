import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '', redirectTo: '/layout/dashboard', pathMatch: 'full'},
  {path: 'login', loadChildren : ()=> import('./auth/login/login.module').then(m=>m.LoginModule)},
  {path: 'layout', loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

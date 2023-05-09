import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,

  ],
  imports: [
    LayoutRoutingModule,
    MatSidenavModule,
    CommonModule
  ]
})
export class LayoutModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComboboxClassroomComponent } from './combobox-classroom/combobox-classroom.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [CommonModule,
    MatSelectModule
  ],
  declarations: [ComboboxClassroomComponent],
  exports: [ComboboxClassroomComponent],
})
export class SharedClassroomModule {}

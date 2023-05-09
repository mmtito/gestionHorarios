import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeacherComboboxComponent } from './teacher-combobox/teacher-combobox.component';
import { AutocompleTeacherComponent } from './autocomple-teacher/autocomple-teacher.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarSharedModule } from '../toolbar/toolbar.shared.module';

@NgModule({
  imports: [CommonModule,
  MatAutocompleteModule,
  ReactiveFormsModule,
MatFormFieldModule,
ToolbarSharedModule

],
  declarations: [TeacherComboboxComponent, AutocompleTeacherComponent],
  exports: [TeacherComboboxComponent, AutocompleTeacherComponent],
})
export class SharedTeacherModule {}

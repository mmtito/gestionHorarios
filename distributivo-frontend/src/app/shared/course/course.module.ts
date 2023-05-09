import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxCoursComponent } from './combobox-cours/combobox-cours.component';
import { AutocompleteGradeComponent } from './autocomplete-grade/autocomplete-grade.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToolbarSharedModule } from '../toolbar/toolbar.shared.module';



@NgModule({
  declarations: [
    ComboboxCoursComponent,
    AutocompleteGradeComponent
  ],
  exports:[
    ComboboxCoursComponent,
    AutocompleteGradeComponent
  ],
  imports: [
    CommonModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
      MatFormFieldModule,
      ToolbarSharedModule],
})
export class SharedCourseModule { }

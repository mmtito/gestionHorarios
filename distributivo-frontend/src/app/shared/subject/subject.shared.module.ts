import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToolbarSharedModule } from '../toolbar/toolbar.shared.module';

import { AutocompleteSubjectComponent } from './autocomplete-subject/autocomplete-subject.component';

@NgModule({
    imports: [CommonModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
      MatFormFieldModule,
      ToolbarSharedModule],
    exports: [AutocompleteSubjectComponent],
    declarations: [AutocompleteSubjectComponent],
    providers: [],
})
export class SubjectSharedModule { }

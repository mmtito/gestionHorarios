import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
    imports: [ MatDatepickerModule,

        MatFormFieldModule,
        MatNativeDateModule,
 ],
    exports: [DatePickerComponent],
    declarations: [DatePickerComponent],
    providers: [],
})
export class SheduleSharedModule { }

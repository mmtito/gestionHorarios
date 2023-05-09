import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourComboboxComponent } from './hour-combobox/hour-combobox.component';
import { DayComboboxComponent } from './day-combobox/day-combobox.component';


@NgModule({
  declarations: [
    HourComboboxComponent,
    DayComboboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HourComboboxComponent,
    DayComboboxComponent
  ]
})
export class TimeSharedModule { }
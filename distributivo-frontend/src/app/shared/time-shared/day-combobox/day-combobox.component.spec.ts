import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayComboboxComponent } from './day-combobox.component';

describe('DayComboboxComponent', () => {
  let component: DayComboboxComponent;
  let fixture: ComponentFixture<DayComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayComboboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

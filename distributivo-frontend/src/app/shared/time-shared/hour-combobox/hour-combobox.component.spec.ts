import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourComboboxComponent } from './hour-combobox.component';

describe('HourComboboxComponent', () => {
  let component: HourComboboxComponent;
  let fixture: ComponentFixture<HourComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourComboboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

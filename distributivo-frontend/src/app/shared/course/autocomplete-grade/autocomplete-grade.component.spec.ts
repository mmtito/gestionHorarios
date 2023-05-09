import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteGradeComponent } from './autocomplete-grade.component';

describe('AutocompleteGradeComponent', () => {
  let component: AutocompleteGradeComponent;
  let fixture: ComponentFixture<AutocompleteGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

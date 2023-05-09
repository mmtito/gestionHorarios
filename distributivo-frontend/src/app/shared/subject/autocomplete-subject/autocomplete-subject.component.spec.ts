import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSubjectComponent } from './autocomplete-subject.component';

describe('AutocompleteSubjectComponent', () => {
  let component: AutocompleteSubjectComponent;
  let fixture: ComponentFixture<AutocompleteSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

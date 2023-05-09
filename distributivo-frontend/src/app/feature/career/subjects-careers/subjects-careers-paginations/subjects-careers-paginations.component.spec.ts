import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsCareersPaginationsComponent } from './subjects-careers-paginations.component';

describe('SubjectsCareersPaginationsComponent', () => {
  let component: SubjectsCareersPaginationsComponent;
  let fixture: ComponentFixture<SubjectsCareersPaginationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsCareersPaginationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsCareersPaginationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPaginationComponent } from './teacher-pagination.component';

describe('TeacherPaginationComponent', () => {
  let component: TeacherPaginationComponent;
  let fixture: ComponentFixture<TeacherPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

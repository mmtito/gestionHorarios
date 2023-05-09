import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleTeacherComponent } from './autocomple-teacher.component';

describe('AutocompleTeacherComponent', () => {
  let component: AutocompleTeacherComponent;
  let fixture: ComponentFixture<AutocompleTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

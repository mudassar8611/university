import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPanel1Component } from './student-panel1.component';

describe('StudentPanel1Component', () => {
  let component: StudentPanel1Component;
  let fixture: ComponentFixture<StudentPanel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPanel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPanel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

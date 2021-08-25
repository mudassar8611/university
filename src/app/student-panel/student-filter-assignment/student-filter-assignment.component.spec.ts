import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFilterAssignmentComponent } from './student-filter-assignment.component';

describe('StudentFilterAssignmentComponent', () => {
  let component: StudentFilterAssignmentComponent;
  let fixture: ComponentFixture<StudentFilterAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFilterAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFilterAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

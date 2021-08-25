import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPannelComponent } from './student-pannel.component';

describe('StudentPannelComponent', () => {
  let component: StudentPannelComponent;
  let fixture: ComponentFixture<StudentPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

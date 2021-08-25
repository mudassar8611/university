import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeadmissionformComponent } from './collegeadmissionform.component';

describe('CollegeadmissionformComponent', () => {
  let component: CollegeadmissionformComponent;
  let fixture: ComponentFixture<CollegeadmissionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeadmissionformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeadmissionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

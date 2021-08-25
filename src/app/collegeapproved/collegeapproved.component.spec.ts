import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeapprovedComponent } from './collegeapproved.component';

describe('CollegeapprovedComponent', () => {
  let component: CollegeapprovedComponent;
  let fixture: ComponentFixture<CollegeapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

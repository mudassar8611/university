import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeformviewComponent } from './collegeformview.component';

describe('CollegeformviewComponent', () => {
  let component: CollegeformviewComponent;
  let fixture: ComponentFixture<CollegeformviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeformviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeformviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

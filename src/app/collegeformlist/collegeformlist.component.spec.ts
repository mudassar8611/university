import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeformlistComponent } from './collegeformlist.component';

describe('CollegeformlistComponent', () => {
  let component: CollegeformlistComponent;
  let fixture: ComponentFixture<CollegeformlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeformlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeformlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegefeesComponent } from './collegefees.component';

describe('CollegefeesComponent', () => {
  let component: CollegefeesComponent;
  let fixture: ComponentFixture<CollegefeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegefeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

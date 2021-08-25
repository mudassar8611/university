import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniDashboardComponent } from './uni-dashboard.component';

describe('UniDashboardComponent', () => {
  let component: UniDashboardComponent;
  let fixture: ComponentFixture<UniDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

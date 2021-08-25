import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterdashboardComponent } from './interdashboard.component';

describe('InterdashboardComponent', () => {
  let component: InterdashboardComponent;
  let fixture: ComponentFixture<InterdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

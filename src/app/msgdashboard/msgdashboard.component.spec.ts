import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgdashboardComponent } from './msgdashboard.component';

describe('MsgdashboardComponent', () => {
  let component: MsgdashboardComponent;
  let fixture: ComponentFixture<MsgdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

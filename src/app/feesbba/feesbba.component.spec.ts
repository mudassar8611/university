import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesbbaComponent } from './feesbba.component';

describe('FeesbbaComponent', () => {
  let component: FeesbbaComponent;
  let fixture: ComponentFixture<FeesbbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesbbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesbbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

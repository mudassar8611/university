import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeezoologyComponent } from './feezoology.component';

describe('FeezoologyComponent', () => {
  let component: FeezoologyComponent;
  let fixture: ComponentFixture<FeezoologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeezoologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeezoologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

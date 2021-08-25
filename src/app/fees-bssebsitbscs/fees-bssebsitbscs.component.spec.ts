import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesBSSEBSITBSCSComponent } from './fees-bssebsitbscs.component';

describe('FeesBSSEBSITBSCSComponent', () => {
  let component: FeesBSSEBSITBSCSComponent;
  let fixture: ComponentFixture<FeesBSSEBSITBSCSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesBSSEBSITBSCSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesBSSEBSITBSCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

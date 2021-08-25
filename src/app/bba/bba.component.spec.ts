import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbaComponent } from './bba.component';

describe('BbaComponent', () => {
  let component: BbaComponent;
  let fixture: ComponentFixture<BbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

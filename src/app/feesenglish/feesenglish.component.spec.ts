import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesenglishComponent } from './feesenglish.component';

describe('FeesenglishComponent', () => {
  let component: FeesenglishComponent;
  let fixture: ComponentFixture<FeesenglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesenglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesenglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

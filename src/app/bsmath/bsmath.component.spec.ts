import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsmathComponent } from './bsmath.component';

describe('BsmathComponent', () => {
  let component: BsmathComponent;
  let fixture: ComponentFixture<BsmathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsmathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsmathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

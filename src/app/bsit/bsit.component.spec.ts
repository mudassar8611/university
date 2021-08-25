import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsitComponent } from './bsit.component';

describe('BsitComponent', () => {
  let component: BsitComponent;
  let fixture: ComponentFixture<BsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

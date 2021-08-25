import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsseComponent } from './bsse.component';

describe('BsseComponent', () => {
  let component: BsseComponent;
  let fixture: ComponentFixture<BsseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

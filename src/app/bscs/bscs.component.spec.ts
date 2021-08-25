import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscsComponent } from './bscs.component';

describe('BscsComponent', () => {
  let component: BscsComponent;
  let fixture: ComponentFixture<BscsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

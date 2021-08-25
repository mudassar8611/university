import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegerejectedComponent } from './collegerejected.component';

describe('CollegerejectedComponent', () => {
  let component: CollegerejectedComponent;
  let fixture: ComponentFixture<CollegerejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegerejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegerejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

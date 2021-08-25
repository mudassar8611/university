import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FscmedicalComponent } from './fscmedical.component';

describe('FscmedicalComponent', () => {
  let component: FscmedicalComponent;
  let fixture: ComponentFixture<FscmedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FscmedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FscmedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

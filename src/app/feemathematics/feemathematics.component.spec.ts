import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeemathematicsComponent } from './feemathematics.component';

describe('FeemathematicsComponent', () => {
  let component: FeemathematicsComponent;
  let fixture: ComponentFixture<FeemathematicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeemathematicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeemathematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

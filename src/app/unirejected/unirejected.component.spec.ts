import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirejectedComponent } from './unirejected.component';

describe('UnirejectedComponent', () => {
  let component: UnirejectedComponent;
  let fixture: ComponentFixture<UnirejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnirejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniprovedComponent } from './uniproved.component';

describe('UniprovedComponent', () => {
  let component: UniprovedComponent;
  let fixture: ComponentFixture<UniprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentAdminComponent } from './assignment-admin.component';

describe('AssignmentAdminComponent', () => {
  let component: AssignmentAdminComponent;
  let fixture: ComponentFixture<AssignmentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcollegeformComponent } from './editcollegeform.component';

describe('EditcollegeformComponent', () => {
  let component: EditcollegeformComponent;
  let fixture: ComponentFixture<EditcollegeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcollegeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcollegeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

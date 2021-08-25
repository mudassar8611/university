import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcomComponent } from './icom.component';

describe('IcomComponent', () => {
  let component: IcomComponent;
  let fixture: ComponentFixture<IcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

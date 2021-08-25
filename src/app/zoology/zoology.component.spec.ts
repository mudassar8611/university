import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoologyComponent } from './zoology.component';

describe('ZoologyComponent', () => {
  let component: ZoologyComponent;
  let fixture: ComponentFixture<ZoologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

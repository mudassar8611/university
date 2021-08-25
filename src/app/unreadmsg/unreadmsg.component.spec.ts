import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadmsgComponent } from './unreadmsg.component';

describe('UnreadmsgComponent', () => {
  let component: UnreadmsgComponent;
  let fixture: ComponentFixture<UnreadmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreadmsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

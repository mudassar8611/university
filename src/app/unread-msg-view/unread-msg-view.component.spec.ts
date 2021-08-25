import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadMsgViewComponent } from './unread-msg-view.component';

describe('UnreadMsgViewComponent', () => {
  let component: UnreadMsgViewComponent;
  let fixture: ComponentFixture<UnreadMsgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreadMsgViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadMsgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

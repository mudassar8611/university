import { TestBed } from '@angular/core/testing';

import { TeacherSignupService } from './teacher-signup.service';

describe('TeacherSignupService', () => {
  let service: TeacherSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

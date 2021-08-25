import { TestBed } from '@angular/core/testing';

import { CollegeserviceService } from './collegeservice.service';

describe('CollegeserviceService', () => {
  let service: CollegeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

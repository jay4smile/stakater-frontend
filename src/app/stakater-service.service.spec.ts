import { TestBed } from '@angular/core/testing';

import { StakaterServiceService } from './stakater-service.service';

describe('StakaterServiceService', () => {
  let service: StakaterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StakaterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

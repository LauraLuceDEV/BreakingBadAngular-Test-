import { TestBed } from '@angular/core/testing';

import { BreakingBadAPIService } from './breaking-bad-api.service';

describe('BreakingBadAPIService', () => {
  let service: BreakingBadAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakingBadAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

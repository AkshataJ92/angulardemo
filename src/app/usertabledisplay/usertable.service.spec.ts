import { TestBed } from '@angular/core/testing';

import { UsertableService } from './usertable.service';

describe('UsertableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsertableService = TestBed.get(UsertableService);
    expect(service).toBeTruthy();
  });
});

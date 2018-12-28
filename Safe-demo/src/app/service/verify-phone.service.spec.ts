import { TestBed } from '@angular/core/testing';

import { VerifyPhoneService } from './verify-phone.service';

describe('VerifyPhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifyPhoneService = TestBed.get(VerifyPhoneService);
    expect(service).toBeTruthy();
  });
});

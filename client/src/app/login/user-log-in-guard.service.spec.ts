import { TestBed } from '@angular/core/testing';

import { UserLogInGuardService } from './user-log-in-guard.service';

describe('UserLogInGuardService', () => {
  let service: UserLogInGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLogInGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

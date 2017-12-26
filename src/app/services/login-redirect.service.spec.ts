/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginRedirect } from './login-redirect.service';

describe('LoginRedirectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRedirect]
    });
  });

  it('should ...', inject([LoginRedirect], (service: LoginRedirect) => {
    expect(service).toBeTruthy();
  }));
});

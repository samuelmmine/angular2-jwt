/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnsureAuthenticated } from './ensure-authenticated.service';

describe('EnsureAuthenticatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureAuthenticated]
    });
  });

  it('should ...', inject([EnsureAuthenticated], (service: EnsureAuthenticated) => {
    expect(service).toBeTruthy();
  }));
});

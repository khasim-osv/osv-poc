import { TestBed } from '@angular/core/testing';

import { ErrorInterceptorService } from './errorInterceptor.service';

describe('HttpInterceptorService', () => {
  let service: ErrorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { AlertServiceService } from './alert.service';

describe('AlertServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertServiceService]
    });
  });

  it('should be created', inject([AlertServiceService], (service: AlertServiceService) => {
    expect(service).toBeTruthy();
  }));
});

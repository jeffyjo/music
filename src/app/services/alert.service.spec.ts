import { TestBed, inject } from '@angular/core/testing';

import { AlertService } from './alert.service';

describe('AlertServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService]
    });
  });

  // it('should be created', inject([AlertServiceService], (service: AlertServiceService) => {
  //   expect(service).toBeTruthy();
  // }));
});

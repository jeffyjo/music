import { TestBed, inject } from '@angular/core/testing';

import { BandmemberService } from './bandmember.service';

describe('BandmemberDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandmemberService]
    });
  });

  // it('should be created', inject([BandmemberService], (service: BandmemberService) => {
  //   expect(service).toBeTruthy();
  // }));
});

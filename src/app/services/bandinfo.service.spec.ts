import { TestBed, inject } from '@angular/core/testing';

import { BandinfoService } from './bandinfo.service';

describe('BandinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandinfoService]
    });
  });

  // it('should be created', inject([BandinfoService], (service: BandinfoService) => {
  //   expect(service).toBeTruthy();
  // }));
});

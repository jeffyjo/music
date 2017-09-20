import { TestBed, inject } from '@angular/core/testing';

import { BandmemberDialogService } from './bandmember-dialog.service';

describe('BandmemberDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandmemberDialogService]
    });
  });

  it('should be created', inject([BandmemberDialogService], (service: BandmemberDialogService) => {
    expect(service).toBeTruthy();
  }));
});

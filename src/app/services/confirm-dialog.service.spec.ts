import { TestBed, inject } from '@angular/core/testing';

import { DialogsService } from './confirm-dialog.service';

describe('DialogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogsService]
    });
  });

  it('should be created', inject([DialogsService], (service: DialogsService) => {
    expect(service).toBeTruthy();
  }));
});

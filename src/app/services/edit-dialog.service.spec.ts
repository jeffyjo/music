import { TestBed, inject } from '@angular/core/testing';

import { EditDialogService } from './edit-dialog.service';

describe('EditDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditDialogService]
    });
  });

  it('should be created', inject([EditDialogService], (service: EditDialogService) => {
    expect(service).toBeTruthy();
  }));
});

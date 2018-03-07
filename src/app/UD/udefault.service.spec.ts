import { TestBed, inject } from '@angular/core/testing';

import { UdefaultService } from './udefault.service';

describe('UdefaultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UdefaultService]
    });
  });

  it('should be created', inject([UdefaultService], (service: UdefaultService) => {
    expect(service).toBeTruthy();
  }));
});

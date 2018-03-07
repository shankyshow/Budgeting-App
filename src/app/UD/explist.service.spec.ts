import { TestBed, inject } from '@angular/core/testing';

import { ExplistService } from './explist.service';

describe('ExplistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExplistService]
    });
  });

  it('should be created', inject([ExplistService], (service: ExplistService) => {
    expect(service).toBeTruthy();
  }));
});

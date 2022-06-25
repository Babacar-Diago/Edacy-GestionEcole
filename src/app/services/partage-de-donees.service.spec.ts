import { TestBed } from '@angular/core/testing';

import { PartageDeDoneesService } from './partage-de-donees.service';

describe('PartageDeDoneesService', () => {
  let service: PartageDeDoneesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartageDeDoneesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

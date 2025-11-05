import { TestBed } from '@angular/core/testing';

import { GetNamesService } from './get-names-service';

describe('GetNamesService', () => {
  let service: GetNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

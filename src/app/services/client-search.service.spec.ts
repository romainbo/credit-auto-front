import {TestBed} from '@angular/core/testing';

import {ClientSearchService} from './client-search.service';

describe('ClientSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientSearchService = TestBed.get(ClientSearchService);
    expect(service).toBeTruthy();
  });
});

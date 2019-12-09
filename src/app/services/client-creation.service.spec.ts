import {TestBed} from '@angular/core/testing';

import {ClientCreationService} from './client-creation.service';

describe('ClientCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientCreationService = TestBed.get(ClientCreationService);
    expect(service).toBeTruthy();
  });
});

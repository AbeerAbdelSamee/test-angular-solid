import { TestBed } from '@angular/core/testing';

import { DreamsService } from './dreams.service';

describe('DreamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DreamsService = TestBed.get(DreamsService);
    expect(service).toBeTruthy();
  });
});

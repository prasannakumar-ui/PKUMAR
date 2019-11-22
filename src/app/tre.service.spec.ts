import { TestBed } from '@angular/core/testing';

import { TreService } from './tre.service';

describe('TreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreService = TestBed.get(TreService);
    expect(service).toBeTruthy();
  });
});

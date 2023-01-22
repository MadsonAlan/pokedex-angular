import { TestBed } from '@angular/core/testing';

import { PoketypeService } from './poketype.service';

describe('PoketypeService', () => {
  let service: PoketypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoketypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

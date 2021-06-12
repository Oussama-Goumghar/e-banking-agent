import { TestBed } from '@angular/core/testing';

import { BenifisiairService } from './benifisiair.service';

describe('BenifisiairService', () => {
  let service: BenifisiairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenifisiairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

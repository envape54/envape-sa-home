import { TestBed, inject } from '@angular/core/testing';

import { GoodiesService } from './goodies.service';

describe('GoodiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodiesService]
    });
  });

  it('should ...', inject([GoodiesService], (service: GoodiesService) => {
    expect(service).toBeTruthy();
  }));
});

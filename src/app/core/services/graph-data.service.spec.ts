import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GraphDataService } from './graph-data.service';

describe('GraphDataService', () => {
  let service: GraphDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GraphDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

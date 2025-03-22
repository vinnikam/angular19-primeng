import { TestBed } from '@angular/core/testing';

import { EquiposservicioService } from './equiposservicio.service';

describe('EquiposservicioService', () => {
  let service: EquiposservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquiposservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

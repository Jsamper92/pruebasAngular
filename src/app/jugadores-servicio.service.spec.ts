import { TestBed } from '@angular/core/testing';

import { JugadoresServicioService } from './jugadores-servicio.service';

describe('JugadoresServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JugadoresServicioService = TestBed.get(JugadoresServicioService);
    expect(service).toBeTruthy();
  });
});

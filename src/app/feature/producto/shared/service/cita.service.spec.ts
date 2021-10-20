import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CitaService } from './cita.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { Cita } from './../model/cita';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndpointCitas = `${environment.endpoint2}citas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    const productService: CitaService = TestBed.inject(CitaService);
    expect(productService).toBeTruthy();
  });

  it('Creación de Cita, se debería crear una cita de forma satisfactoria', () => {
    const dummyCita = new Cita();
    dummyCita.nameUser = 'Carlos Antonio';
    dummyCita.lastNameUser = 'Carlos Antonio';
    dummyCita.emailUser = 'Carlos Antonio';
    dummyCita.telUser = 3156467654;
    dummyCita.cityUser = 'Carlos Antonio';
    dummyCita.date = '2021-10-20';
    dummyCita.tarifa = 150000;
    service.guardarCita(dummyCita).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointCitas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});

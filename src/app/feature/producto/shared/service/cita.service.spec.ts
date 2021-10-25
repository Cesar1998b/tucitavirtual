import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CitaService } from './cita.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { of } from 'rxjs';
import {
  CitaMock,
  festivosMock
} from 'src/test/utils/mocks/cita/cita.mock';

describe('CitaService', () => {
  let service: CitaService;
  let http: HttpService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    service = TestBed.inject(CitaService);
    http = injector.inject(HttpService);
  });

  it('should be created', () => {
    const productService: CitaService = TestBed.inject(CitaService);
    expect(productService).toBeTruthy();
  });

  it('Debería retornar un Observable<boolean> cuando se hace una petición post en Cita', () => {
    const spyDoPost = spyOn(http, 'doPost').and.returnValue(of(true));
    const esFestivo = false;

    service.guardarCita(CitaMock, esFestivo).subscribe((res: boolean) => {
      expect(res).toBeTruthy();
    });

    expect(spyDoPost).toHaveBeenCalled();
  });

  it('Debería retornar los festivos según el año', () => {
    const anio = 2017;
    const obtenerFestivos = service.obtenerFestivos(anio);

    expect(obtenerFestivos).toEqual(festivosMock);
  });

  it('Debería retornar la tarifa doble ya que se agendo cita un festivo', () => {
    const esFestivo = true;
    const expected = environment.tarifaFija * 2;
    const price = service.calcTarifaCitas(esFestivo);

    expect(price).toEqual(expected);
  });

});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Cita } from '../model/cita';
import { CitaService } from './cita.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { of } from 'rxjs';
import {
  CitaMock,
  CitaArrayMock,
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

  it('Debería retornar un Observable<Cita[]> con todas las citas', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(CitaArrayMock));

    service.obtenerCitas().subscribe((res: Cita[]) => {
      expect(res).toEqual(CitaArrayMock);
    });

    expect(spyDoGet).toHaveBeenCalled();

  });

  it('Debe eliminar una cita', () => {
    const spyDoDelete = spyOn(http, 'doDelete').and.returnValue(of(CitaMock));

    service.eliminarCita(CitaMock);
    expect(spyDoDelete).toHaveBeenCalled();

  });

});

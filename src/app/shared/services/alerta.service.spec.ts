import { TestBed } from '@angular/core/testing';
import { AlertaService } from './alerta.service';

describe('AlertaService', () => {
  let service: AlertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertaService);
  });

  it('Debe crearse', () => {
    expect(service).toBeTruthy();
  });

  it('Mostrar sweetalert Exitoso', () => {
    const spynToastSucces = spyOn(service, 'alertaExito').and.callThrough();
    service.alertaExito();
    expect(spynToastSucces).toHaveBeenCalled();
  });

  it('Mostrar sweetalert Información', () => {
    const titulo = 'Información';
    const text = 'Su cita no se ha podido agendar';
    const spynToastDeleteSucces = spyOn(service, 'alertaInformacion').and.callThrough();
    service.alertaInformacion(titulo, text);
    expect(spynToastDeleteSucces).toHaveBeenCalled();
  });

});

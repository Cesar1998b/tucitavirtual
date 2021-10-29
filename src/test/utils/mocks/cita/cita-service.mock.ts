import { Cita } from '../../../../app/feature/producto/shared/model/cita';
import { CitaArrayMock, CitaMock } from './cita.mock';
import { of } from 'rxjs';

export class CitaServiceMock {

  guardarCita(cita: Cita) {
    if (cita) {
      return of(true);
    }
  }

  obtenerFestivos(year: number) {
    if (year !== 0) {
      return of(true);
    }
  }

  verificarFestivo(date: Date, festivos: Array<any>) {
    if (date && festivos.length !== 0) {
      return of(true);
    }
  }

  obtenerCitas() {
    return of(CitaArrayMock);
  }

  eliminarCita() {
    return of(CitaMock);
  }

}

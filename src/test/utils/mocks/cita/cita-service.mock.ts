import { Cita } from '../../../../app/feature/producto/shared/model/cita';
import { of } from 'rxjs';

export class CitaServiceMock {

  guardarCita(cita: Cita) {
    if(cita){
      return of(true);
    }
  }

}

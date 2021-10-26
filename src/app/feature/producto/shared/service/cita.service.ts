import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';
declare var require: any;

@Injectable()
export class CitaService {

  festivos: any[];

  constructor(protected http: HttpService) {}

  public guardarCita(cita: Cita, esFestivo: boolean) {
    cita.tarifa = this.calcTarifaCitas(esFestivo);
    return this.http.doPost<Cita, boolean>(
      `${environment.endpoint}citas`,
      cita,
      this.http.optsName('crear cita')
    );
  }

  obtenerFestivos(year: number){
    const moduloFestivos = require('colombia-holidays');
    return this.festivos = moduloFestivos.getColombiaHolidaysByYear(year);
  }

  calcTarifaCitas(esFestivo: boolean){
    if (!esFestivo) {
      return environment.tarifaFija;
    }else{
      return environment.tarifaFija * 2;
    }
  }

  obtenerCitas() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}citas`);
  }

  eliminarCita(cita: Cita){
    return this.http.doDelete<boolean>(`${environment.endpoint}citas/${cita.id}`);
  }

}

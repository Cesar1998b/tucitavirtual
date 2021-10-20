import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../shared/service/cita.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cita } from '../../shared/model/cita';

declare var require: any;
const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;
const TARIFA_FIJA = 150000;

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss'],
})
export class AgendarCitaComponent implements OnInit {
  citasForm: FormGroup;
  today: Date = new Date();
  cita = new Cita();
  holidays: [];

  constructor(protected citaServices: CitaService) {}

  ngOnInit() {
    this.construirFormularioCitas();
  }

  private construirFormularioCitas() {
    this.citasForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }

  agendarCita() {
    const fecha = this.citasForm.value.date;
    fecha.setDate(fecha.getDate() + 1);
    if (fecha.getDay() === 0 || fecha.getDay() === 6) {
      alert('No se puede agendar cita sábados o domingos');
    } else {
      this.getHolidays(fecha.getFullYear());
      const f = fecha.toISOString().substring(0, 10);
      const holidayKey = 'holiday';
      const holiday = this.holidays.find((item) => item[holidayKey] === f);
      this.cita.date = f;
      if (holiday === undefined) {
        this.cita.tarifa = TARIFA_FIJA;
        this.crearCita();
      } else {
        alert( 'Es festivo' );
        this.cita.tarifa = (TARIFA_FIJA * 2);
        this.crearCita();
      }
    }
  }

  private getHolidays(year: Date) {
    const module = require('colombia-holidays');
    this.holidays = module.getColombiaHolidaysByYear(year);
  }

  public crearCita(){
    this.citaServices.guardarCita(this.cita).subscribe((data) => {
      console.log(data);
    });
    this.citasForm.reset();
  }

}

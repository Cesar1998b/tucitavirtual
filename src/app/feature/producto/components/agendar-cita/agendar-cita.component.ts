import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../shared/service/cita.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cita } from './../../shared/model/cita';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;
const festivoKey = 'holiday';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss'],
})
export class AgendarCitaComponent implements OnInit {

  citasForm: FormGroup;
  fechaActual: Date = new Date();
  festivos: [];

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
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }

  get cita(): Cita{
    return this.citasForm.value;
  }

  get fechaToString(): string{
    const numeroLimite = 10;
    return this.cita.date.toISOString().substring(0, numeroLimite);
  }

  agendarCita(){
    this.cita.date.setDate(this.cita.date.getDate() + 1);
    if (this.cita.date.getDay() === 0 || this.cita.date.getDay() === 6) {
      alert('No se puede agendar cita sábados o domingos');
    } else {
      if (this.verificarFestivo) {
        alert('Es festivo');
        this.crearCita(true);
      }else{
        this.crearCita(false);
      }
    }
  }

  crearCita(esFestivo: boolean){
    this.citaServices.guardarCita(this.cita, esFestivo).subscribe((data) => {
      console.log(data);
    });
    this.citasForm.reset();
  }

  obtenerFestivos(year: number){
    this.festivos = this.citaServices.obtenerFestivos(year);
  }

  verificarFestivo(): boolean{
    this.obtenerFestivos(this.cita.date.getFullYear());
    const esFestivo = this.festivos.find((item) => item[festivoKey] === this.fechaToString);
    if (esFestivo === undefined) {
      return false;
    }else{
      return true;
    }
  }

  mostrarMensajeError(controlName: string) {
    return (
      this.citasForm.get(controlName).invalid && this.citasForm.get(controlName).touched
    );
  }

}

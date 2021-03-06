import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../shared/service/cita.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertaService } from '@shared/services/alerta.service';
import { Cita } from './../../shared/model/cita';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;
@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss'],
})
export class AgendarCitaComponent implements OnInit {

  citasForm: FormGroup;
  fechaActual: Date = new Date();
  festivos: [];

  constructor(
    protected citaServices: CitaService,
    private alertaService: AlertaService,
    private readonly router: Router,
  ) { }

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

  agendarCita(){
    this.cita.date.setDate(this.cita.date.getDate() + 1);
    if (this.cita.date.getDay() === 0 || this.cita.date.getDay() === 6) {
      this.alertaService.alertaInformacion('Información', 'Su cita no se puede agendar un sábado o domingo. Por favor revisar la fecha.');
    } else {
      this.festivos = this.citaServices.obtenerFestivos(this.cita.date.getFullYear());
      const esFestivo = this.citaServices.verificarFestivo(this.cita.date, this.festivos);
      if (esFestivo) {
        this.alertaService.alertaInformacion('Información', `Su cita será agendada para el día ${this.cita.date} la cuál es festivo y se aplicará tarifa doble.`);
        this.crearCita(true);
      }else{
        this.crearCita(false);
      }
    }
  }

  crearCita(esFestivo: boolean){
    this.citaServices.guardarCita(this.cita, esFestivo).subscribe(() => {
      this.alertaService.alertaExito();
      this.redirigirMisCitas();
    });
  }

  mostrarMensajeError(controlName: string) {
    return (
      this.citasForm.get(controlName).invalid && this.citasForm.get(controlName).touched
    );
  }

  redirigirMisCitas(): void{
    this.router.navigate(['cita/lista']);
  }

}

import { Component, OnInit } from "@angular/core";
import { ProductoService } from "../../shared/service/producto.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Cita } from "./../../shared/model/cita";

declare var require: any;
const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;
const TARIFA_FIJA = 150000;

@Component({
  selector: "app-form-cita",
  templateUrl: "./form-cita.component.html",
  styleUrls: ["./form-cita.component.scss"],
})
export class FormCitaComponent implements OnInit {
  citasForm: FormGroup;
  today: Date = new Date();
  holidays: [];
  cita: Cita;

  constructor(protected productoServices: ProductoService) {}

  ngOnInit() {
    this.construirFormularioCitas();
  }

  private construirFormularioCitas() {
    this.citasForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      lastname: new FormControl("", [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      tel: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
    });
  }

  cerar() {
    // this.productoServices.guardar(this.citasForm.value);
    var fecha = this.citasForm.value.date;
    fecha.setDate(fecha.getDate() + 1);
    if (fecha.getDay() === 0 || fecha.getDay() === 6) {
      alert("No se puede agendar cita sábados o domingos");
    } else {
      this.getHolidays(fecha.getFullYear());
      let f = fecha.toISOString().substring(0, 10);
      let holiday = this.holidays.find((item) => item["holiday"] == f);
      if (holiday === undefined) {
        this.crearCita(2,this.citasForm,f,TARIFA_FIJA);
      } else {
        alert("Es festivo");
        this.crearCita(3,this.citasForm,f,(TARIFA_FIJA*2));
      }
    }
  }

  private getHolidays(year: Date) {
    var module = require("colombia-holidays");
    this.holidays = module.getColombiaHolidaysByYear(year);
  }

  public crearCita(id: number,form: FormGroup, fecha: string, tarifa: number){
    this.cita =  new Cita(
      id,
      form.value.name,
      form.value.lastname,
      form.value.email,
      form.value.tel,
      form.value.city,
      fecha,
      tarifa
    )
    this.productoServices.guardarCita(this.cita).subscribe((data:any)=>{
      console.log(data);
    });
  }

}

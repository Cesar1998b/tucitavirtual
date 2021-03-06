import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../shared/service/cita.service';
import { AlertaService } from '@shared/services/alerta.service';
import { Cita } from './../../shared/model/cita';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-cita',
  templateUrl: './lista-cita.component.html',
  styleUrls: ['./lista-cita.component.scss']
})
export class ListaCitaComponent implements OnInit {

  labels: string[] = [
    'Fecha de la Cita',
    'Nombre Completo',
    'Email',
    'Teléfono/Celular',
    'Valor Cita'
  ];

  fields: string[] = [
    'date',
    'name',
    'email',
    'tel',
    'tarifa'
  ];

  caption = 'Tabla Citas';
  action = 'Eliminar';

  citas: Observable<Cita[]>;

  constructor(protected citaServices: CitaService, private alertaService: AlertaService) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas(): void{
    this.citas = this.citaServices.obtenerCitas();
  }

  eliminarCita(cita: Cita): void{
    this.citaServices.eliminarCita(cita).subscribe(() => {
      this.obtenerCitas();
      this.alertaService.alertaInformacion('Cita Eliminada', 'Su cita ha sido eliminada con éxito.');
    });
  }

}

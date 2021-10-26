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

  nombresColumnas: string[] = ['date','name','email','tel','tarifa','borrar'];
  citas: Observable<Cita[]>;
  filtroUsuario: string = '';

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
    })
  }

}

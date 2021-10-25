import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  public alertaExito() {
    return Swal.fire({
      title: 'Exitoso',
      text: 'Se ha agendado tu cita con éxito.',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Ok'
    });
  }

  public alertaInformación(titulo: string, texto: string) {
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'info',
      showConfirmButton: true,
      confirmButtonText: 'Ok'
    });
  }

}

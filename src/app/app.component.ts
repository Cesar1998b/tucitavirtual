import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-base';
  public items: MenuItem[] = [
    { url: '/cita', nombre: 'Inicio' },
    { url: '/cita/crear', nombre: 'Agendar Cita' },
    { url: '/cita/lista', nombre: 'Mis Citas' }
  ];


}

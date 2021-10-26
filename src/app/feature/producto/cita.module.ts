import { NgModule } from '@angular/core';

import { CitaRoutingModule } from './cita-routing.module';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { CitaService } from './shared/service/cita.service';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { ListaCitaComponent } from './components/lista-cita/lista-cita.component';

@NgModule({
  declarations: [
    AgendarCitaComponent,
    CitaComponent,
    ListaCitaComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [CitaService, MaterialModule]
})
export class CitaModule { }

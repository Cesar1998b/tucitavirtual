import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from './cita-routing.module';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { CitaService } from './shared/service/cita.service';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    AgendarCitaComponent,
    CitaComponent
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [CitaService, MaterialModule]
})
export class ProductoModule { }

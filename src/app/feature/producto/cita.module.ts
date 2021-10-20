import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from './cita-routing.module';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { CitaService } from './shared/service/cita.service';
import { SharedModule } from '@shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AgendarCitaComponent,
    CitaComponent
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [CitaService, MatDatepickerModule, MatNativeDateModule]
})
export class ProductoModule { }

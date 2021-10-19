import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from './producto-routing.module';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoService } from './shared/service/producto.service';
import { SharedModule } from '@shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AgendarCitaComponent,
    ListarProductoComponent,
    BorrarProductoComponent,
    ProductoComponent,
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
  providers: [ProductoService, MatDatepickerModule, MatNativeDateModule]
})
export class ProductoModule { }

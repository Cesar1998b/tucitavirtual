import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { ProductoComponent } from './components/producto/producto.component';


const routes: Routes = [
  {
    path: '',
    component: ProductoComponent,
    children: [
      {
        path: 'crear',
        component: AgendarCitaComponent
      },
      {
        path: 'listar',
        component: ListarProductoComponent
      },
      {
        path: 'borrar',
        component: BorrarProductoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }

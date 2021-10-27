import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitaComponent } from './components/cita/cita.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { ListaCitaComponent } from './components/lista-cita/lista-cita.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: CitaComponent,
  },
  {
    path: 'crear',
    component: AgendarCitaComponent
  },
  {
    path: 'lista',
    component: ListaCitaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }

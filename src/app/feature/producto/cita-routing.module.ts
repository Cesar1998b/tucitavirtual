import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { CitaComponent } from './components/cita/cita.component';


const routes: Routes = [
  {
    path: '',
    component: CitaComponent,
    pathMatch: 'full'
  },
  {
    path: 'crear',
    component: AgendarCitaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }

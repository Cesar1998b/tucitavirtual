import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AgendarCitaComponent } from './agendar-cita.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CitaService } from '../../shared/service/cita.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearProductoComponent', () => {
  let component: AgendarCitaComponent;
  let fixture: ComponentFixture<AgendarCitaComponent>;
  let citaService: CitaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendarCitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [CitaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    spyOn(citaService, 'guardarCita').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.citasForm.valid).toBeFalsy();
  });

  it('Registrando una cita', () => {
    const date = new Date();
    expect(component.citasForm.valid).toBeFalsy();
    component.citasForm.controls.name.setValue('Carlos Antonio');
    component.citasForm.controls.lastname.setValue('Perez Correa');
    component.citasForm.controls.email.setValue('antonio@gmail.com');
    component.citasForm.controls.tel.setValue('3156479876');
    component.citasForm.controls.city.setValue('Pereira');
    component.citasForm.controls.date.setValue(date);
    expect(component.citasForm.valid).toBeTruthy();

    component.agendarCita();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});

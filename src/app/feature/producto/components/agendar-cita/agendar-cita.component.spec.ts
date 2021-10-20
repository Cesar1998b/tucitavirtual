import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AgendarCitaComponent } from './agendar-cita.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CitaService } from '../../shared/service/cita.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

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
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule
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

  it('Los campos están vacíos y botón de agendar cita deshabilitado', () => {
    expect(component.citasForm.valid).toBeFalsy();
  });

  it('Campo email no contiene un mail valido', () => {
    let errors = {};
    let email = component.citasForm.controls['email'];
    expect(email.valid).toBeFalsy();

    //Mail requerido
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    //Mail incorrecto
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    //Mail correcto
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
});


  it('Registrando una cita y reseteando el formulario', () => {
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

    expect(component.citasForm.valid).toBeFalsy();

  });
});

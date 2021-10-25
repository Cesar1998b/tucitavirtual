import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarCitaComponent } from './agendar-cita.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CitaService } from '../../shared/service/cita.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import {
  CitaMock,
  agendarCitaFinDeSemanaMock,
  agendarCitaEnFestivosMock
 } from 'src/test/utils/mocks/cita/cita.mock';
import { CitaServiceMock } from 'src/test/utils/mocks/cita/cita-service.mock';


describe('AgendarCitaComponent', () => {
  let component: AgendarCitaComponent;
  let fixture: ComponentFixture<AgendarCitaComponent>;
  let citaService: CitaService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AgendarCitaComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule,
          BrowserAnimationsModule,
          MaterialModule
        ],
        providers: [
          { provide: CitaService, useClass: CitaServiceMock },
          { provide: HttpService }
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    // spyOn(citaService, 'guardarCita').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('Se creo el componente AgendarCita', () => {
    expect(component).toBeTruthy();
  });

  it('Se creo el formulario de Citas', () => {
    expect(component.citasForm.value).toEqual({
      name: '',
      email: '',
      tel: '',
      date: '',
    });
  });

  it('Los campos están vacíos y botón de agendar cita deshabilitado', () => {
    expect(component.citasForm.valid).toBeFalsy();
  });

  it('Campo email no contiene un mail valido', () => {
    let errors = {};
    const emailKey = 'email';
    const requiredKey = 'required';
    const email = component.citasForm.controls[emailKey];
    expect(email.valid).toBeFalsy();

    // Mail requerido
    errors = email.errors || {};
    expect(errors[requiredKey]).toBeTruthy();

    // Mail incorrecto
    email.setValue('test');
    errors = email.errors || {};
    expect(errors[requiredKey]).toBeFalsy();
    expect(errors[emailKey]).toBeTruthy();

    // Mail correcto
    email.setValue('test@example.com');
    errors = email.errors || {};
    expect(errors[requiredKey]).toBeFalsy();
    expect(errors[emailKey]).toBeFalsy();
  });

  it('Retornará falso cuando el formulario es invalido', () => {
    const infoInvalida = {
      name: 1,
      email: 'cesarbotina@',
      tel: null,
      date: '',
    };

    component.citasForm.patchValue(infoInvalida);
    expect(component.citasForm.valid).toBeFalsy();

  });

  it('Registrando una cita, alerta por elegir un sábado o domingo', () => {
    component.citasForm.patchValue(agendarCitaFinDeSemanaMock);

    component.agendarCita();
    fixture.detectChanges();

    expect(component.citasForm.valid).toBeTruthy();
  });

  it('Registrando una cita, alerta por elegir un festivo y aplica tarifa doble', () => {
    const spyGuardar = spyOn(citaService, 'guardarCita').and.callThrough();

    component.citasForm.patchValue(agendarCitaEnFestivosMock);
    component.agendarCita();
    fixture.detectChanges();

    expect(spyGuardar).toHaveBeenCalled();
    expect(component.citasForm.valid).toBeFalsy();
  });

  it('Registrando una cita día de semana y reseteando el formulario', () => {
    const spyGuardar = spyOn(citaService, 'guardarCita').and.callThrough();

    component.citasForm.patchValue(CitaMock);
    component.agendarCita();
    fixture.detectChanges();

    expect(spyGuardar).toHaveBeenCalled();
    expect(component.citasForm.valid).toBeFalsy();
  });
});

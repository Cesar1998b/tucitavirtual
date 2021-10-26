import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { Cita } from '@producto/shared/model/cita';
import { ListaCitaComponent } from './lista-cita.component';
import { CitaService } from '../../shared/service/cita.service';
import {
  CitaMock,
  CitaArrayMock
} from 'src/test/utils/mocks/cita/cita.mock';
import { CitaServiceMock } from 'src/test/utils/mocks/cita/cita-service.mock';
import { MaterialModule } from 'src/app/material.module';

describe('ListaCitaComponent', () => {
  let component: ListaCitaComponent;
  let fixture: ComponentFixture<ListaCitaComponent>;
  let citaService: CitaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCitaComponent ],
      imports: [
        CommonModule,
        SharedModule,
        MaterialModule
      ],
      providers: [
        { provide: CitaService, useClass: CitaServiceMock },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe llamar al servicio para obtener las citas', () => {
    const getCitasSpy = spyOn(citaService, 'obtenerCitas').and.callThrough();

    component.ngOnInit();

    expect(getCitasSpy).toHaveBeenCalled();
    component.citas.subscribe((orders: Cita[]) => {
      expect(orders).toEqual(CitaArrayMock);
    });

  });

  it('Debe llamar al servicio para obtener las citas', fakeAsync(() => {
    const getCitasSpy = spyOn(citaService, 'obtenerCitas').and.callThrough();

    component.ngOnInit();
    tick(1000);

    fixture.detectChanges();

    expect(getCitasSpy).toHaveBeenCalled();
    component.citas.subscribe((orders: Cita[]) => {
      expect(orders).toEqual(CitaArrayMock);
    });

  }));

  it('Debe eliminar la cita', async () => {
    const deleteCitasSpy = spyOn(citaService, 'eliminarCita').and.callThrough();

    component.eliminarCita(CitaMock);
    fixture.detectChanges();

    expect(deleteCitasSpy).toHaveBeenCalled();
  });
});

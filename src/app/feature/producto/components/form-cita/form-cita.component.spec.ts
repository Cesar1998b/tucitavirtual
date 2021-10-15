import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { FormCitaComponent } from './form-cita.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearProductoComponent', () => {
  let component: FormCitaComponent;
  let fixture: ComponentFixture<FormCitaComponent>;
  let productoService: ProductoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ProductoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCitaComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.productoForm.valid).toBeFalsy();
  });

  it('Registrando producto', () => {
    expect(component.productoForm.valid).toBeFalsy();
    component.productoForm.controls.id.setValue('001');
    component.productoForm.controls.descripcion.setValue('Producto test');
    expect(component.productoForm.valid).toBeTruthy();

    component.cerar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});

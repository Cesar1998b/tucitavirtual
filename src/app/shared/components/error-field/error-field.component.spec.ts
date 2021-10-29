import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorFieldComponent } from './error-field.component';

describe('ErrorFieldComponent', () => {
  let component: ErrorFieldComponent;
  let fixture: ComponentFixture<ErrorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('No debe mostrar el mensaje', () => {
    component.controlName = '';

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.mostrarMensaje).toBeFalsy();
  });

  it('Debe mostrar el mensaje', () => {
    component.controlName = 'nombre';

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.mostrarMensaje).toBeTruthy();
  });
});

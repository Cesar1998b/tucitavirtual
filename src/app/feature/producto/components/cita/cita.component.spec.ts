import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaComponent } from './cita.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CitaComponent', () => {
  let component: CitaComponent;
  let fixture: ComponentFixture<CitaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Redirige al cita al dar click en en boton agendar cita', () => {
    const spyRedirect = spyOn(component, 'redirectToCitas').and.callThrough();
    const btnAgendarCita = fixture.nativeElement.querySelector('#button_agendar');

    btnAgendarCita.click();
    fixture.detectChanges();

    expect(spyRedirect).toHaveBeenCalled();
  });
});

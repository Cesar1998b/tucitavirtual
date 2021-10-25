import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatButtonModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Redirige al cita al dar click en en boton agendar cita', () => {
    const btnAgendarCita = fixture.debugElement.nativeElement.querySelector('button');
    const spyRedirect = spyOn(component, 'redirectToCitas').and.callFake(() => {});

    btnAgendarCita.click();

    expect(spyRedirect).toHaveBeenCalled();
  });

});

import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ManejadorError } from './manejador-error';

describe(`ManejadorError`, () => {
    let manejador: ManejadorError;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        manejador = new ManejadorError();
    });

    it('Debería llamar mensajePorDefecto e imprimirErrorConsola', () => {
        const spyMensajePorDefecto = spyOn(manejador as any, 'mensajePorDefecto').and.callThrough();
        const spyImprimirErrorConsola = spyOn(manejador as any, 'imprimirErrorConsola').and.callThrough();
        manejador.handleError(null);
        expect(spyMensajePorDefecto).toHaveBeenCalled();
        expect(spyImprimirErrorConsola).toHaveBeenCalled();
    });

    it('Debería retornar el mismo error si no se instancia en HttpErrorResponseFound', () => {
        const error = 'error de prueba';
        const response = (manejador as any).mensajePorDefecto(error);
        expect(response).toEqual('error de prueba');
    });

    it('Debería retornar el mensaje "Lo sentimos, no se detecta conexión a internet" on navigator.online === false', () => {
        spyOnProperty(Navigator.prototype, 'onLine').and.returnValue(false);
        const error = new HttpErrorResponse({});
        const response = (manejador as any).mensajePorDefecto(error);
        expect(response).toEqual('Lo sentimos, no se detecta conexión a internet');
    });

    it('Debería llamar obtenerErrorHttpCode si el error tiene la propiedad status y no el mensaje', () => {
        const spyObtenerErrorHttpCode = spyOn(manejador as any, 'obtenerErrorHttpCode').and.callThrough();
        const error = new HttpErrorResponse({
            status: 450,
            error: {}
        });
        (manejador as any).mensajePorDefecto(error);
        expect(spyObtenerErrorHttpCode).toHaveBeenCalled();
    });
});

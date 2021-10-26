import { AppPage } from '../../app.po';
import { AgendarCita } from '../../page/agendar-cita/agendar-cita.po';

describe('AgendarCita', () => {
    let page: AppPage;
    let cita: AgendarCita;

    beforeEach( () => {
        page = new AppPage();
        cita = new AgendarCita();
        page.navigateTo('/cita/crear');
    });

    it('Debe aparecer el error "Por favor ingrese su nombre completo"', () => {
        expect(cita.getRequiredNameError()).toEqual('Por favor ingrese su nombre completo');
    });

    it('Debe aparecer el error "Por favor ingrese un email valido"', () => {
        expect(cita.getRequiredEmailError()).toEqual('Por favor ingrese un email valido"');
    });

    it('Debe aparecer el error "Por favor ingrese su teléfono"', () => {
        expect(cita.getRequiredTelError()).toEqual('Por favor ingrese su teléfono"');
    });

});

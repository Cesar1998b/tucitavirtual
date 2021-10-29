import { AppPage } from '../../app.po';
import { Cita } from '../../page/cita/cita.po';

describe('AgendarCita', () => {
    let page: AppPage;
    let cita: Cita;

    beforeEach( () => {
        page = new AppPage();
        cita = new Cita();
    });

    it('Debe redireccionar al componente AgendarCita"', () => {
      page.navigateTo('');
      cita.clickRedirigirAgendarCita();
      expect(page.navigateTo('/crear'));
    });

});

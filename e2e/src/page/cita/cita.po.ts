import { by, element } from 'protractor';

export class Cita {

    private redirigirAgendarCita = element(by.id('button_agendar'));

    async clickRedirigirAgendarCita() {
        return await this.redirigirAgendarCita.click();
    }

}

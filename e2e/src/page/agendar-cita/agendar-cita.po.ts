import { browser, by, element, ElementFinder } from 'protractor';

export class AgendarCita {
    private CITA = {
        requiredName: (): ElementFinder => element(by.id('agendar-cita__error_name-required')),
        requiredEmail: (): ElementFinder => element(by.id('agendar-cita__error_email-required')),
        requiredTel: (): ElementFinder => element(by.id('agendar-cita__error_tel-required')),
        btnAgendar: (): ElementFinder => element(by.id('agendar-cita_btn'))
    };

    async getRequiredNameError() {
        return await this.CITA.requiredName().getText();
    }

    async getRequiredEmailError() {
        return await this.CITA.requiredEmail().getText();
    }

    async getRequiredTelError() {
      return await this.CITA.requiredTel().getText();
    }

    async clickAgendarCitaButton() {
        await this.CITA.btnAgendar().click();
        browser.sleep(100);
    }
}

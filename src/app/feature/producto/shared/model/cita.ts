export class Cita {
    id: number;
    nameUser: string;
    lastNameUser: string;
    emailUser: string;
    telUser: number;
    cityUser: string;
    date: string;
    tarifa: number;

  constructor(id: number, nameUser: string, lastNameUser: string, emailUser: string, telUser: number, cityUser: string, date: string, tarifa: number) {
      this.id = id;
      this.nameUser = nameUser;
      this.lastNameUser = lastNameUser;
      this.emailUser = emailUser;
      this.telUser = telUser;
      this.cityUser = cityUser;
      this.date = date;
      this.tarifa = tarifa;
  }
}

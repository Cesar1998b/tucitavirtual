import { Injectable } from "@angular/core";
import { HttpService } from "@core-service/http.service";
import { environment } from "src/environments/environment";
import { Cita } from "../model/cita";

@Injectable()
export class CitaService {

  constructor(protected http: HttpService) {}

  // public consultar() {
  //   return this.http.doGet<Producto[]>(
  //     `${environment.endpoint}/tiposFamilia`,
  //     this.http.optsName("consultar productos")
  //   );
  // }

  // public guardar(producto: Producto) {
  //   return this.http.doPost<Producto, boolean>(
  //     `${environment.endpoint}/productos`,
  //     producto,
  //     this.http.optsName("crear/actualizar productos")
  //   );
  // }

  // public eliminar(producto: Producto) {
  //   return this.http.doDelete<boolean>(
  //     `${environment.endpoint}/productos/${producto.id}`,
  //     this.http.optsName("eliminar productos")
  //   );
  // }

  public guardarCita(cita: Cita) {
    return this.http.doPost<Cita, boolean>(
      `${environment.endpoint2}citas`,
      cita,
      this.http.optsName("crear cita")
    );
  }

}
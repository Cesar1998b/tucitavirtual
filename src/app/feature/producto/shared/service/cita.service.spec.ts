// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { CitaService } from './cita.service';
// // import { environment } from 'src/environments/environment';
// import { HttpService } from 'src/app/core/services/http.service';
// import { HttpResponse } from '@angular/common/http';
// import { Cita } from './../model/cita';

// describe('CitaService', () => {
//   // let httpMock: HttpTestingController;
//   // let service: CitaService;
//   // const apiEndpointProductos = `${environment.endpoint}/productos`;

//   beforeEach(() => {
//     const injector = TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [CitaService, HttpService]
//     });
//     httpMock = injector.inject(HttpTestingController);
//     service = TestBed.inject(CitaService);
//   });

//   it('should be created', () => {
//     const productService: CitaService = TestBed.inject(CitaService);
//     expect(productService).toBeTruthy();
//   });

//   // it('deberia crear una cita', () => {
//   //   const dummyCita = new Cita('');
//   //   service.guardar(dummyProducto).subscribe((respuesta) => {
//   //     expect(respuesta).toEqual(true);
//   //   });
//   //   const req = httpMock.expectOne(apiEndpointProductos);
//   //   expect(req.request.method).toBe('POST');
//   //   req.event(new HttpResponse<boolean>({body: true}));
//   // });
// });

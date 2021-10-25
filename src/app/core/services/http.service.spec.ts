import { TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpService', () => {
    let service: HttpService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                HttpService
            ]
        });
        service = TestBed.inject(HttpService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call set header with name anf xhr-name', () => {
        const name = 'hello';
        const spySetHeader = spyOn(service as any, 'setHeader').and.callThrough();
        service.optsName(name);
        expect(spySetHeader).toHaveBeenCalledWith('xhr-name', name);
    });

    it('should create options', () => {
        const spyCreateDefaultOptions = spyOn(service, 'createDefaultOptions').and.callThrough();
        (service as any).createOptions({});
        expect(spyCreateDefaultOptions).toHaveBeenCalled();
    });

    it('should create options with not opts.headers', () => {
        const spyCreateDefaultOptions = spyOn(service, 'createDefaultOptions').and.callThrough().and.returnValue({
            headers: new HttpHeaders({ 'Content-Type': '' })
        });
        (service as any).createOptions({});
        expect(spyCreateDefaultOptions).toHaveBeenCalled();
    });

    it('should create options and call to endpoint in doPost', () => {
        const options = {};
        const url = '/prueba';
        const body = { prueba: 'prueba' };
        const spyDoPost = spyOn(service as any, 'createOptions').and.callThrough();
        service.doPost(url, body, options).toPromise();
        expect(spyDoPost).toHaveBeenCalled();
        const httpRequest = httpMock.expectOne(url);
        expect(httpRequest.request.method).toEqual('POST');
        expect(httpRequest.request.url).toEqual(url);
        expect(httpRequest.request.body).toEqual(body);
    });

    it('should create options and call to endpoint in doDelete', () => {
        const options = {};
        const url = '/prueba';
        const spyDoPost = spyOn(service as any, 'createOptions').and.callThrough();
        service.doDelete(url, options).toPromise();
        expect(spyDoPost).toHaveBeenCalled();
        const httpRequest = httpMock.expectOne(url);
        expect(httpRequest.request.method).toEqual('DELETE');
        expect(httpRequest.request.url).toEqual(url);
    });

    it('should create options and call to endpoint in doGetParameters', () => {
        const options = {};
        const url = '/prueba';
        const params = new HttpParams({ fromObject: { id: '1', name: 'Jhon' } });
        const spyDoPost = spyOn(service as any, 'createOptions').and.callThrough();
        service.doGetParameters(url, params, options).toPromise();
        expect(spyDoPost).toHaveBeenCalled();
        const httpRequest = httpMock.expectOne(`${url}?id=1&name=Jhon`);
        expect(httpRequest.request.method).toEqual('GET');
        expect(httpRequest.request.url).toEqual(`${url}`);
        expect(httpRequest.request.params).toEqual(params);
    });
});

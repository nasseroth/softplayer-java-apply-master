import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from './model/departamento.model';

const urlApiDepartamentos = 'http://localhost:8080/api/ti/departamento/';
const urlApiInserirDepartamento = 'http://localhost:8080/api/ti/departamento/';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  loadDepartamentos(): Observable<Departamento[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    return this.http.get<Departamento[]>(urlApiDepartamentos, options);
  }

  inserirDepartamento(departamento: Departamento): Observable<Departamento> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    return this.http.post<Departamento>(urlApiInserirDepartamento, departamento, options);
  }

  loadDepartamentoById(id: number): Observable<Departamento> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    return this.http.get<Departamento>(urlApiDepartamentos+id, options);
  }

}

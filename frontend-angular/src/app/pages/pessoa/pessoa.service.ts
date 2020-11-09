import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../pages/usuario/model/user.model';

const urlApiUser = 'http://localhost:8080/api/ti/usuario/administrador/';
const urlApiInserirUser = 'http://localhost:8080/api/ti/usuario/administrador/';
const urlApiAlterar = 'http://localhost:8080/api/auth/alterar';
const urlApiInserir = 'http://localhost:8080/api/auth/signup';
const urlApiConsultar = 'http://localhost:8080/api/auth/usuario/';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  loadUser(): Observable<User[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.get<User[]>(urlApiUser, options);
  }

  alterUser(pessoa: User): Observable<User> {
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.post<User>(urlApiAlterar, pessoa, options);
  }

  insertUser(pessoa: User): Observable<User> {
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.post<User>(urlApiInserir, pessoa, options);
  }

  loadUserBydId(id: number): Observable<User> {
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.get<User>(urlApiConsultar+id, options);
  }

}

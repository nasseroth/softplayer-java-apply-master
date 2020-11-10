import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../pages/usuario/model/user.model';

const urlApiUser = 'https://softplan-softplayer.herokuapp.com/api/ti/usuario/administrador/';
const urlApiInserirUser = 'https://softplan-softplayer.herokuapp.com/api/ti/usuario/administrador/';
const urlApiAlterar = 'https://softplan-softplayer.herokuapp.com/api/auth/alterar';
const urlApiInserir = 'https://softplan-softplayer.herokuapp.com/api/auth/signup';
const urlApiConsultar = 'https://softplan-softplayer.herokuapp.com/api/auth/usuario/';
const urlApiExcluir = 'https://softplan-softplayer.herokuapp.com/api/ti/usuario/administrador';

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

  removeUser(id: number) {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    }
    return this.http.delete<User>(urlApiExcluir+'/excluir/'+id, options);
  }

}

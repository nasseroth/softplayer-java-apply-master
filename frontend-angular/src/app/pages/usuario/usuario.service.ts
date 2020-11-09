import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

const urlApiUser = 'http://localhost:8080/api/ti/usuario/administrador';
const urlApiInserirUser = 'http://localhost:8080/api/ti/pessoa/';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  loadUsuarios(): Observable<User[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    }
    return this.http.get<User[]>(urlApiUser, options);
  }

  loadUsuariosSemAdm(): Observable<User[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    }
    return this.http.get<User[]>(urlApiUser+'/usuario', options);
  }

  saveUserAdmin(id: number): Observable<User> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    }
    return this.http.get<User>(urlApiUser+'/'+id, options)
  }

  removeUserAdmin(id: number) {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    }
    return this.http.get<User>(urlApiUser+'/remover/'+id, options);
  }

  loadUser(): Observable<User[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    return this.http.get<User[]>(urlApiUser, options);
  }

  insertUser(pessoa: User): Observable<User> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    return this.http.post<User>(urlApiInserirUser, pessoa, options);
  }

  loadUserBydId(id: number): Observable<User> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    return this.http.get<User>(urlApiInserirUser+id, options);
  }
}

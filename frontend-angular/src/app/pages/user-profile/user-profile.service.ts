import { Injectable } from '@angular/core';
import { User } from '../dashboard/model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlApiDashboard = 'http://localhost:8080/api/auth/usuario/';
const urlApiSalvarArquivo = 'http://localhost:8080/api/ti/perfil/user/';
const urlApiBaixarArquivo = 'http://localhost:8080/api/ti/perfil/download/';
const urlDeletarArquivo = 'http://localhost:8080/api/ti/perfil/delete/user/';
const urlApiAlterar = 'http://localhost:8080/api/auth/alterar';
const urlApiAlterarSenha = 'http://localhost:8080/api/auth/alterar/senha';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  loadUsuario(id: number): Observable<User> {
    return this.http.get<User>(urlApiDashboard+id);
  }

  deleteImage(id: number) {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    this.http.delete<any>(urlDeletarArquivo+id, options);
  }

  salvar(data: File, id: number): Observable<any> {
    this.deleteImage(id);
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    let formData = new FormData();
    formData.append('arquivo', data, data.name);
    return this.http.post<any>
      (urlApiSalvarArquivo+id, formData, options);
  }

  alterar(user: User): Observable<User> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    return this.http.post<User>(urlApiAlterar, user, options);
  }

  alterarSenha(user: User): Observable<User> {
    let options = {
      headers: new HttpHeaders().set('Authorization', "Bearer "+localStorage.getItem('token'))
    };
    return this.http.post<User>(urlApiAlterarSenha, user, options);
  }

}

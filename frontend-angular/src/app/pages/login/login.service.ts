import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from './model/loginform.model';
import { Observable } from 'rxjs';

const urlSignIn = 'http://localhost:8080/api/auth/signin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signIn(login: LoginForm): Observable<LoginForm> {
    console.log(login)
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post<LoginForm>(urlSignIn, login, options);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpForm } from './model/register.model';

const urlApiRegistro = 'http://localhost:8080/api/auth/signup';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  signUp(registro: SignUpForm): Observable<SignUpForm> {
    return this.http.post<SignUpForm>(urlApiRegistro, registro, { responseType: 'json' });
  }

}

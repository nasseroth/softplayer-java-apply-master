import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user.model';
import { Observable } from 'rxjs';

const urlApiDashboard = 'http://localhost:8080/api/auth/usuario/';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  loadUsuario(id: number): Observable<User> {
    return this.http.get<User>(urlApiDashboard+id);
  }

}

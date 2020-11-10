import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user.model';
import { Observable } from 'rxjs';

const urlApiDashboard = 'https://softplan-softplayer.herokuapp.com/api/auth/usuario/';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  loadUsuario(id: number): Observable<User> {
    return this.http.get<User>(urlApiDashboard+id);
  }

}

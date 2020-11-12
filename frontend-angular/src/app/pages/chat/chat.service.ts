import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from '../../pages/chat/model/chat.model';

const urlApiObterChat = 'http://localhost:8080/api/ti/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  loadChat(id: string): Observable<Chat[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.get<Chat[]>(urlApiObterChat+'/'+id, options);
  }
}

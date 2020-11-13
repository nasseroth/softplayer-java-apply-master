import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from '../../pages/chat/model/chat.model';
import { User } from '../dashboard/model/user.model';

const urlApiObterChat = 'https://softplan-softplayer.herokuapp.com/api/ti/chat/todas-mensagens/';
const urlApiObterMensagem = 'https://softplan-softplayer.herokuapp.com/api/ti/chat/receber-mensagem/';
const urlApiEnviarMensagem = 'http://localhost:8080/api/ti/chat/enviar-mensagem';
const urlApiTodosUsuarios = 'https://softplan-softplayer.herokuapp.com/api/ti/usuario/administrador';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  loadChat(id: string): Observable<Chat[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.get<Chat[]>(urlApiObterChat+id, options);
  }

  enviarMensagem(mensagem: Chat): Observable<Chat> {
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.post<Chat>(urlApiEnviarMensagem, mensagem, options);
  }


  loadMensagem(id: string, idDest: string): Observable<Chat[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.get<Chat[]>(urlApiObterMensagem+id+'/'+idDest, options);
  }

  getAll(): Observable<User[]> {
    let options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.get<User[]>(urlApiTodosUsuarios, options);
  }
}

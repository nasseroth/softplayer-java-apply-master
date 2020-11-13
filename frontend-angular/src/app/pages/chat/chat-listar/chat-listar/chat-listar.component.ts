import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from '../../model/chat.model';
import { ChatService } from './../../chat.service';
@Component({
  selector: 'app-chat-listar',
  templateUrl: './chat-listar.component.html',
  styleUrls: []
})
export class ChatListarComponent implements OnInit {

  chats: Chat[];
  idDestinatarioRegistro: number;
  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.loadChats(localStorage.getItem('id'));
  }


  loadChats(id: string) {
    this.chatService.loadChat(id).subscribe(
      chats => {
        this.chats = chats;
      }
    )
  }

  goToChat(idDestinatarioEnviado: number) {
    this.idDestinatarioRegistro = idDestinatarioEnviado;
    localStorage.setItem('idDest', idDestinatarioEnviado.toString());
    this.router.navigate(['/mensagem']);
  }
}

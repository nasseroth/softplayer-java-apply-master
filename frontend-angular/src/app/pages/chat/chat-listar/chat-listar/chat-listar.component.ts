import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/pages/dashboard/model/user.model';
import { Chat } from '../../model/chat.model';
import { ChatService } from './../../chat.service';
@Component({
  selector: 'app-chat-listar',
  templateUrl: './chat-listar.component.html',
  styleUrls: []
})
export class ChatListarComponent implements OnInit {

  chats: Chat[];

  constructor(private chatService: ChatService) { }


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
}

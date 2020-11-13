import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';
import { ChatService } from '../../chat.service';
import { Chat } from '../../model/chat.model';
import { ChatListarComponent } from './../../chat-listar/chat-listar/chat-listar.component';
@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {

  chats: Chat[];
  chatEnv: Chat = new Chat();
  idDest: string;
  id: string;
  mensagemEnvio: string;
  constructor(private chatService: ChatService, private router: Router,
              private toastr: ToastrService) { }

  @ViewChild(ChatListarComponent)
  chat: ChatListarComponent;
  ngOnInit() {
    this.id = localStorage.getItem('id');
    this.idDest = localStorage.getItem('idDest');
    this.loadChat(this.id, this.idDest);
  }

  loadChat(id: string, idDest: string) {
    this.chatService.loadMensagem(id, localStorage.getItem('idDest')).subscribe(
      chats => {
        this.chats = chats;
      }
    )
  }

  submitMensagem() {
    this.chatEnv.idUsuarioRementente = this.id;
    this.chatEnv.idUsuarioDestinatario = this.idDest;
    this.chatEnv.usernameDestinatario = null;
    this.chatEnv.usernameRemetente = null;
    this.chatEnv.mensagem = this.mensagemEnvio;
      this.chatService.enviarMensagem(this.chatEnv).subscribe(
        () => {
          this.toastr.success('Mensagem enviada com sucesso!');
        }
      ),
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
}


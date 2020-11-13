import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/pages/usuario/model/user.model';
import { ChatService } from '../../chat.service';
import { Chat } from '../../model/chat.model';
@Component({
  selector: 'app-nova-mensagem',
  templateUrl: './nova-mensagem.component.html',
  styleUrls: []
})
export class NovaMensagemComponent implements OnInit {
  constructor(private chatService: ChatService,
              private toastr: ToastrService,
              private router: Router,
              private route: ActivatedRoute) { }

  usuarios = [];
  chat: Chat = new Chat();
  usuario: User = new User();
  idString: string;
  idNumber: number;
  idDest: string;
  mensagemEnvio: string;

  ngOnInit() {
    this.searchUsuarios();
  }

  submitChat() {
    var e = document.getElementById('usuario');
    this.chat.idUsuarioRementente = localStorage.getItem('id');
    this.chat.mensagem = this.mensagemEnvio;
    this.chat.idUsuarioDestinatario = String(this.usuario.id);
    console.log('> '+this.chat.idUsuarioDestinatario);
    this.chatService.enviarMensagem(this.chat).subscribe(
      () => {
        this.toastr.success('Cadastrado com sucesso!');
      }
    ),
    setTimeout(() => {
      window.location.reload();
      }, 10000);
    }


  searchUsuarios() {
    this.chatService.getAll()
      .subscribe( data => {
        this.usuarios.push(this.jsonDataToUser(data));
        this.usuarios.pop();
      });
  }

  private jsonDataToUser(jsonData: any[]) {
    const usuariosArr: User[] = [];
    jsonData.forEach(element => this.usuarios.push(element as User));

    return usuariosArr;
  }

}

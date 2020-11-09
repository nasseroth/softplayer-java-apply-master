import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { User } from '../model/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-administrar',
  templateUrl: './usuario-administrar.component.html',
  styleUrls: ['./usuario-administrar.component.scss']
})
export class UsuarioAdministrarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private toastr: ToastrService) { }

  usuarios: User[];
  usuariosQ: User[];
  pageAtual: number = 1;
  pageAtual2: number = 1;

  ngOnInit() {
    this.loadUsuarios();
    this.loadUsuariosWithoutAdmin();
  }

  loadUsuarios() {
    this.usuarioService.loadUsuarios().subscribe(
      _usuarios => {
        this.usuarios = _usuarios;
      }
    )
  }

  loadUsuariosWithoutAdmin() {
    this.usuarioService.loadUsuariosSemAdm().subscribe(
      _usuariosQ => {
        this.usuariosQ = _usuariosQ;
      }
    )
  }

  tornarAdm(usuario: User) {
    this.usuarioService.saveUserAdmin(usuario.id).subscribe(
      () => {
        this.toastr.success(usuario.username+' se tornou Administrador');
      }
    )
    setTimeout(() => {
      window.location.reload();
    }, 1000)
  }

  removerAdm(usuario: User) {
    this.usuarioService.removeUserAdmin(usuario.id).subscribe(
      () => {
        this.toastr.success('Permissão de Administrador revogada!');
      }
    )
    setTimeout(() => {
      window.location.reload();
    }, 1000)
  }

}

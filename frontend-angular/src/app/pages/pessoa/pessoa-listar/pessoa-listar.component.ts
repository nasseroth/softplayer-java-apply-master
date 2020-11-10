import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { User } from '../../usuario/model/user.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: []
})
export class PessoaListarComponent implements OnInit {

  constructor(private pessoaService: PessoaService,
              private toastr: ToastrService,
              private route: Router) { }

  pessoas: User[];
  pageAtual: number = 1;

  ngOnInit() {
    this.loadPessoas();
  }

  loadPessoas() {
    this.pessoaService.loadUser().subscribe(
      pessoas => {
        this.pessoas = pessoas;
      }
    )
  }

  goToInserirPessoa() {
    this.route.navigate(['/pessoa/novo']);
  }

  alterarDados(pessoa: User) {
    this.route.navigate(['/pessoa/'+pessoa.id]);
  }

  remover(pessoa: User) {
    this.pessoaService.removeUser(pessoa.id).subscribe(
      () => {
        this.toastr.success('Usuário removido!');
      }
    )
    setTimeout(() => {
      window.location.reload();
    }, 1000)
  }
}

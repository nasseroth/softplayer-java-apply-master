import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { User } from '../../usuario/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: []
})
export class PessoaListarComponent implements OnInit {

  constructor(private pessoaService: PessoaService,
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

}

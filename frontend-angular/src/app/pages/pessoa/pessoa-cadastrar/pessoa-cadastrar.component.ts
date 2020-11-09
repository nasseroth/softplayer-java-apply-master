import { Component, OnInit } from '@angular/core';
import { User } from '../../usuario/model/user.model';
import { PessoaService } from '../pessoa.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: []
})
export class PessoaCadastrarComponent implements OnInit {

  constructor(private pessoaService: PessoaService,
              private toastr: ToastrService,
              private router: Router,
              private route: ActivatedRoute) { }

  pessoa: User = new User();
  idString: string;
  idNumber: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id') != 'novo') {
        this.idString = params.get('id');
        this.idNumber = Number.parseInt(this.idString);
        this.pessoaService.loadUserBydId(this.idNumber).subscribe(
          pessoa => {
            this.pessoa = pessoa;
            this.pessoa.password = null;
          }
        )
      }
    });

  }

  submitPessoa() {
    console.log('>> ' + this.idNumber);
    if(this.pessoa.username == null || this.pessoa.dataNascimento == null || this.pessoa.cpf == null) {
      this.toastr.error('Campos obrigatórios nulos');
    } else if (this.idNumber == null){
      this.pessoaService.insertUser(this.pessoa).subscribe(
        () => {
          this.toastr.success('Cadastrado com sucesso!');
        }
      ),
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }  else {
      this.pessoaService.alterUser(this.pessoa).subscribe(
        () => {
          this.toastr.success('Alterado com sucesso!');
        }
      ),
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

}

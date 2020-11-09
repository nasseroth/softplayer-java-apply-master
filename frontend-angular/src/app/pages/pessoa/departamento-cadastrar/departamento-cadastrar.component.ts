import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../departamento.service';
import { Departamento } from '../model/departamento.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departamento-cadastrar',
  templateUrl: './departamento-cadastrar.component.html',
  styleUrls: ['./departamento-cadastrar.component.scss']
})
export class DepartamentoCadastrarComponent implements OnInit {

  constructor(private departamentoService: DepartamentoService,
              private toastr: ToastrService,
              private route: ActivatedRoute) { }

  departamento: Departamento = new Departamento();
  idNumber: number;
  idString: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id') != 'novo') {
        this.idString = params.get('id');
        this.idNumber = Number.parseInt(this.idString);
        this.departamentoService.loadDepartamentoById(this.idNumber).subscribe(
          departamento => {
            this.departamento = departamento;
          }
        )
      }
    });
  }

  submitDepartamento() {
    if(this.departamento.nomeDepartamento == null || this.departamento.siglaDepartamento == null) {
      this.toastr.error("Campos obrigatórios nulos")
    }
    else {
      this.departamentoService.inserirDepartamento(this.departamento).subscribe(
        () => {
          this.toastr.success("Cadastrado com sucesso!");
        }
      ),
      setTimeout(() => {
        window.location.reload();
      }, 1000);  
    }
  }

}

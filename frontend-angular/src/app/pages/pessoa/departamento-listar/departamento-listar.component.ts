import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../departamento.service';
import { Departamento } from '../model/departamento.model';
import { load } from '@angular/core/src/render3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento-listar',
  templateUrl: './departamento-listar.component.html',
  styleUrls: ['./departamento-listar.component.scss']
})
export class DepartamentoListarComponent implements OnInit {

  constructor(private departamentoService: DepartamentoService,
              private route: Router) { }

  departamentos: Departamento[];
  pageAtual: number = 1;

  ngOnInit() {
    this.loadDepartamento();
  }

  loadDepartamento() {
    this.departamentoService.loadDepartamentos().subscribe(
      departamento => {
        this.departamentos = departamento;
      }
    )
  }

  goToInserirDepartamento() {
    this.route.navigate(['/departamento/novo']);
  }

  alterarDados(departamento: Departamento) {
    this.route.navigate(['/departamento/'+departamento.guidDepartamento]);
  }

}

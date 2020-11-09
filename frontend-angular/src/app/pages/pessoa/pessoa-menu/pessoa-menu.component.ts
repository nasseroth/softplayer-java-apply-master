import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-menu',
  templateUrl: './pessoa-menu.component.html',
  styleUrls: []
})
export class PessoaMenuComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToPessoa() {
    this.route.navigate(['/pessoa']);
  }

  goToDepartamento() {
    this.route.navigate(['/departamento'])
  }

}

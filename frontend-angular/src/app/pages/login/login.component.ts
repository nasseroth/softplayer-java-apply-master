import { Component, OnInit } from '@angular/core';
import { LoginForm } from './model/loginform.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: LoginForm = new LoginForm();

  constructor(private loginService: LoginService,
              private route: Router,
              private toastr: ToastrService) {}

    meuToken: string;

  ngOnInit() {

  }

  submit() {
    console.log('q');
    this.loginService.signIn(this.login).subscribe(
      user => {
        localStorage.setItem("token",user['accessToken']);
        localStorage.setItem("id",user['id']);
        this.meuToken = localStorage.getItem('token');
        if(this.meuToken !== "undefined") {
          this.route.navigate(['/dashboard'])
          this.toastr.success('Acesso liberado!', 'Bem-vindo');
        }
        else {
          this.toastr.error('Acesso negado!', 'Verifique suas credenciais');
        }
      }
    )
  }

}

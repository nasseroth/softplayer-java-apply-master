import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { SignUpForm } from './model/register.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService,
    private route: Router,
    private toastr: ToastrService) { }

  error: any;
  registro: SignUpForm = new SignUpForm();

  ngOnInit() {

  }

  signUp() {
    this.registerService.signUp(this.registro).subscribe(
      () => {
        this.route.navigate(['/login']);
        this.toastr.success('Sucesso!', 'Cadastrado');
      },
      error => {
        if (error != SyntaxError) {
          this.error = true;
          console.log(error.error);
          this.toastr.error(error.error, 'Erro');

        }
        else {
          this.route.navigate(['/login']);
          this.toastr.success('Sucesso!', 'Cadastrado');
        }
      }
    )
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { PessoaCadastrarComponent } from './pessoa-cadastrar/pessoa-cadastrar.component';
import { PessoaMenuComponent } from './pessoa-menu/pessoa-menu.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [PessoaListarComponent, PessoaCadastrarComponent,
    PessoaMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule
  ]
})
export class PessoaModule { }

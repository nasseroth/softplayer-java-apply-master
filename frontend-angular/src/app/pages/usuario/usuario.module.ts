import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioAdministrarComponent } from './usuario-administrar/usuario-administrar.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [UsuarioAdministrarComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class UsuarioModule { }

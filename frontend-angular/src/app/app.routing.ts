import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PessoaMenuComponent } from './pages/pessoa/pessoa-menu/pessoa-menu.component';
import { PessoaListarComponent } from './pages/pessoa/pessoa-listar/pessoa-listar.component';
import { DepartamentoListarComponent } from './pages/pessoa/departamento-listar/departamento-listar.component';
import { PessoaCadastrarComponent } from './pages/pessoa/pessoa-cadastrar/pessoa-cadastrar.component';
import { DepartamentoCadastrarComponent } from './pages/pessoa/departamento-cadastrar/departamento-cadastrar.component';
import { UsuarioAdministrarComponent } from './pages/usuario/usuario-administrar/usuario-administrar.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'pessoa-menu', component: PessoaMenuComponent },
      { path: 'pessoa', component: PessoaListarComponent },
      { path: 'departamento', component: DepartamentoListarComponent },
      { path: 'departamento/novo', component: DepartamentoCadastrarComponent },
      { path: 'departamento/:id', component: DepartamentoCadastrarComponent },
      { path: 'pessoa/:id', component: PessoaCadastrarComponent },
      { path: 'pessoa/novo', component: PessoaCadastrarComponent },
      { path: 'usuarios', component: UsuarioAdministrarComponent },
    ]
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule' },
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

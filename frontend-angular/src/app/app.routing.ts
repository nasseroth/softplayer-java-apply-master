import { ChatListarComponent } from './pages/chat/chat-listar/chat-listar/chat-listar.component';
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
import { PessoaCadastrarComponent } from './pages/pessoa/pessoa-cadastrar/pessoa-cadastrar.component';
import { AuthGuard } from './auth.guard';
import { MensagemComponent } from './pages/chat/mensagem/mensagem/mensagem.component';
import { NovaMensagemComponent } from './pages/chat/nova-mensagem/nova-mensagem/nova-mensagem.component';

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
      { path: 'pessoa/:id', component: PessoaCadastrarComponent },
      { path: 'pessoa/novo', component: PessoaCadastrarComponent },
      { path: 'chat', component: ChatListarComponent },
      { path: 'mensagem', component: MensagemComponent },
      { path: 'nova-mensagem', component: NovaMensagemComponent },
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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { ToastrModule } from 'ngx-toastr';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { UserProfileModule } from './pages/user-profile/user-profile.module';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { AvatarModule } from 'ngx-avatar';
import { PessoaModule } from './pages/pessoa/pessoa.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { UsuarioModule } from './pages/usuario/usuario.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    ToastrModule.forRoot(),
    DashboardModule,
    UserProfileModule,
    Ng2ImgMaxModule,
    AvatarModule,
    PessoaModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    UsuarioModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

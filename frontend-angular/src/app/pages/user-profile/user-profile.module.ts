import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    AvatarModule
  ]
})
export class UserProfileModule { }

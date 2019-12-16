import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsLoginComponent } from './forms-login/forms-login.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormsLoginComponent],
  exports: [FormsLoginComponent],
  imports: [CommonModule, AuthenticationRoutingModule, ReactiveFormsModule]
})
export class AuthenticationModule {}

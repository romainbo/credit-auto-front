import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsLoginComponent } from './forms-login/forms-login.component';

const routes: Routes = [{ path: 'login', component: FormsLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsLoginComponent } from "./forms-login/forms-login.component";
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{ path: "login", component: FormsLoginComponent }, { path: "admin", component: AdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}

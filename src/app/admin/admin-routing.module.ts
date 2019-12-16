import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates/rates.component';
import { IsSignedInGuard } from '../authentication/is-signed-in.guard';

const routes: Routes = [
  { path: 'rates', component: RatesComponent, canActivate: [IsSignedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates/rates.component';
import { IsSignedInGuard } from '../authentication/is-signed-in.guard';
import { RatesModificationComponent } from './rates/rates-modification/rates-modification.component';

const routes: Routes = [
  {
    path: 'rates',
    component: RatesComponent,
    canActivate: [IsSignedInGuard]
    //data: { roles: ['MANAGER'] }
  },
  {path: "rateModification", component: RatesModificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

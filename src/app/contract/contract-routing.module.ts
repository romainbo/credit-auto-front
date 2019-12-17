import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractCreationComponent } from './contract-creation/contract-creation.component';
import { IsSignedInGuard } from '../authentication/is-signed-in.guard';

const routes: Routes = [
  {
    path: 'createContract',
    component: ContractCreationComponent,
    canActivate: [IsSignedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule {}

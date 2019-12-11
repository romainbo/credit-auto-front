import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractCreationComponent } from './contract-creation/contract-creation.component';


const routes: Routes = [
  {path: "createContract", component: ContractCreationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractCreationComponent } from './contract-creation/contract-creation.component';
import { Simulation } from '../simulation/simulation';
import { Client } from '../client-creation/client';



@NgModule({
  declarations: [ContractCreationComponent],
  exports: [ContractCreationComponent],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})

export class ContractModule {
  contractNumber: number;
  paymentStartDate: string;
  paymentEndDate: string;
  purchaseAmount: number;
  closureDate: string;
  loanTotalCost: number;
  loanRate: number;
  loanDuration: number;
  vehicleCategory: string;
  client: Client;
 // returnedSimulation: Simulation;

  constructor(){

  }
 }

import { Component, OnInit, Input } from '@angular/core';
import { Simulation } from 'src/app/simulation/simulation';
import { Client } from 'src/app/client-creation/client';
import { Router } from '@angular/router';
import { ContractModule } from '../contract.module';
import * as moment from 'moment';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-contract-creation',
  templateUrl: './contract-creation.component.html',
  styleUrls: ['./contract-creation.component.scss']
})
export class ContractCreationComponent implements OnInit {
simulation: Simulation;
client: Client;
contract: ContractModule;
dateTemp: number;
mtnt: any;
test: any;
/*contractNumber: number;
  paymentStartDate: string;
  paymentEndDate: string;
  closureDate: string;
  loanTotalCost: number;
  loanRate: number;
  returnedClient: Client;
  returnedSimulation: Simulation;*/


  constructor(private contractService: ContractService) {}

  ngOnInit() {
    this.simulation = window.history.state.simu;
    this.client = window.history.state.data;

    this.contract = new ContractModule();
    this.contract.returnedClient = this.client;
    this.contract.returnedSimulation = this.simulation;
    this.contract.contractNumber = 3489;
    this.mtnt = moment();

    this.contract.paymentStartDate = moment().format('YYYY-MM-DD');
    this.contract.paymentEndDate = (this.mtnt.add(this.contract.returnedSimulation.loanDuration, 'months')).format('YYYY-MM-DD');
    this.contract.closureDate = null;


    console.log(this.simulation + "simul");
    console.log(this.client + "client");
    console.log(JSON.stringify(this.contract) + "contract");
  }

  submitContract(contrat: ContractModule){
    this.contract = new ContractModule();
    this.contract.returnedClient = this.client;
    this.contract.returnedSimulation = this.simulation;
    this.contract.contractNumber = 3489;
    this.mtnt = moment();

    this.contract.paymentStartDate = moment().format('YYYY-MM-DD');
    this.contract.paymentEndDate = (this.mtnt.add(this.contract.returnedSimulation.loanDuration, 'months')).format('YYYY-MM-DD');
    this.contract.closureDate = null;
    
    this.contractService.postInformationContract(contrat).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}

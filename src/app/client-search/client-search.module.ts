import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientSearchRoutingModule} from './client-search-routing.module';
import {FormClientSearchComponent} from './form-client-search/form-client-search.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ContractModule } from '../contract/contract.module';
import { ContractCreationComponent } from '../contract/contract-creation/contract-creation.component';


@NgModule({
  declarations: [FormClientSearchComponent],
  exports: [FormClientSearchComponent],
  imports: [
    CommonModule,
    ClientSearchRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientSearchModule {
}

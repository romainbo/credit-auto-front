import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsSimulationComponent } from './forms-simulation/forms-simulation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimulationRoutingModule } from './simulation-routing.module';

@NgModule({
  declarations: [FormsSimulationComponent],
  exports: [FormsSimulationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SimulationRoutingModule
  ]
})
export class SimulationModule {}

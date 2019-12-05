import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsSimulationComponent } from "./forms-simulation/forms-simulation.component";
import { FormsModule, ReactiveFormsModule, FormControl } from "@angular/forms";

@NgModule({
  declarations: [FormsSimulationComponent],
  exports: [FormsSimulationComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule]
})
export class SimulationModule {}

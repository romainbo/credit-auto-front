import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Simulation } from "./simulation";
import { FormsSimulationComponent } from "./forms-simulation/forms-simulation.component";

const routes: Routes = [
  { path: "simulation", component: FormsSimulationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulationRoutingModule {}

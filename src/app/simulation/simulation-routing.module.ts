import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Simulation } from "./simulation";

const routes: Routes = [{ path: "", component: Simulation }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulationRoutingModule {}

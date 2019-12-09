import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Simulation } from "./simulation/simulation";

const routes: Routes = [
  {
    path: "",
    redirectTo: "simulation",
    pathMatch: "full"
  },
  {
    path: ":param",
    redirectTo: "simulation",
    pathMatch: "full"
  },
  {
    path: "simulation",
    loadChildren: "./simulation/simulation.module#SimulationModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Simulation} from "./simulation/simulation";

const routes: Routes = [
  {
    path: "",
    redirectTo: "simulation",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

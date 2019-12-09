import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsClientCreationComponent } from "./forms-client-creation/forms-client-creation.component";

const routes: Routes = [
  { path: "nouveauClient", component: FormsClientCreationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientCreationRoutingModule {}

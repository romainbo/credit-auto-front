import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormClientSearchComponent} from "./form-client-search/form-client-search.component";

const routes: Routes = [
  {path: "searchclient", component: FormClientSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSearchRoutingModule {
}

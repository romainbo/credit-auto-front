import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateComponent } from './rate/rate.component';
import { RateModificationComponent } from './rate-modification/rate-modification.component';


const routes: Routes = [
  {path: "rate", component: RateComponent},
  {path: "rateModification", component: RateModificationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateRoutingModule { }

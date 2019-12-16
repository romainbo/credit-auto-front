import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Simulation } from './simulation';
import { FormsSimulationComponent } from './forms-simulation/forms-simulation.component';
import { IsSignedInGuard } from '../authentication/is-signed-in.guard';

const routes: Routes = [
  {
    path: 'simulation',
    component: FormsSimulationComponent,
    canActivate: [IsSignedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulationRoutingModule {}

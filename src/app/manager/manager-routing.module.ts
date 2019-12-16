import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSignedInGuard } from '../authentication/is-signed-in.guard';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [IsSignedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {}

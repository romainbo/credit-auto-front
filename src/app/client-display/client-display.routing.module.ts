import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSignedInGuard } from '../authentication/is-signed-in.guard';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: 'client/:id',
    component: ClientComponent
    // canActivate: [IsSignedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientDisplayRoutingModule {}

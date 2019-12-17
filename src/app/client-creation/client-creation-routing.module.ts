import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsClientCreationComponent } from './forms-client-creation/forms-client-creation.component';
import { IsSignedInGuard } from '../authentication/is-signed-in.guard';

const routes: Routes = [
  {
    path: 'nouveauClient',
    component: FormsClientCreationComponent,
    canActivate: [IsSignedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientCreationRoutingModule {}

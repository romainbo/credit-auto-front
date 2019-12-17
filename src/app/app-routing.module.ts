import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSignedInGuard } from './authentication/is-signed-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

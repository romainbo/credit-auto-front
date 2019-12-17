import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientDisplayRoutingModule } from './client-display.routing.module';

@NgModule({
  declarations: [ClientComponent],
  exports: [ClientComponent],
  imports: [CommonModule, ClientDisplayRoutingModule]
})
export class ClientDisplayModule {}

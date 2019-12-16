import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesComponent } from './rates/rates.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [RatesComponent],
  exports: [RatesComponent],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}

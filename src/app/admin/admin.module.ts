import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesComponent } from './rates/rates.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RatesModificationComponent } from './rates/rates-modification/rates-modification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RatesComponent, RatesModificationComponent],
  exports: [RatesComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule]
})
export class AdminModule {}

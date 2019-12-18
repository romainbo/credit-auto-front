import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { ManagerRoutingModule } from './manager-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StatisticsComponent],
  exports: [StatisticsComponent],
  imports: [CommonModule, ManagerRoutingModule, ReactiveFormsModule]
})
export class ManagerModule {}

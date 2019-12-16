import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
  declarations: [StatisticsComponent],
  exports: [StatisticsComponent],
  imports: [CommonModule, ManagerRoutingModule]
})
export class ManagerModule {}

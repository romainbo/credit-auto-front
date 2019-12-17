import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateRoutingModule } from './rate-routing.module';
import { RateComponent } from './rate/rate.component';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { RateModificationComponent } from './rate-modification/rate-modification.component';


@NgModule({
  declarations: [RateComponent, RateModificationComponent],
  imports: [
    CommonModule,
    RateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RateModule { }

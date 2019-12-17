import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SimulationModule } from './simulation/simulation.module';
import { NavigationModule } from './navigation/navigation.module';
import { ClientCreationModule } from './client-creation/client-creation.module';
import { ClientSearchModule } from './client-search/client-search.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ContractModule } from './contract/contract.module';
import * as moment from 'moment';
import { IsSignedInGuard } from './authentication/is-signed-in.guard';
import { ManagerModule } from './manager/manager.module';
import { AdminModule } from './admin/admin.module';
import { ClientDisplayModule } from './client-display/client-display.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimulationModule,
    NavigationModule,
    ClientCreationModule,
    ClientSearchModule,
    AuthenticationModule,
    ContractModule,
    ManagerModule,
    AdminModule,
    ManagerModule,
    ClientDisplayModule,
  ],
  providers: [IsSignedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

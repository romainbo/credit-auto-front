import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimulationModule } from './simulation/simulation.module';
import { NavigationModule } from './navigation/navigation.module';
import { ClientCreationModule } from './client-creation/client-creation.module';
import { ClientSearchModule } from './client-search/client-search.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationInterceptor } from './authenticationInterceptor';

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
    AuthenticationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

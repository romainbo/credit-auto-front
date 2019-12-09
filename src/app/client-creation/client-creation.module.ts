import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsClientCreationComponent} from "./forms-client-creation/forms-client-creation.component";
import {ClientCreationRoutingModule} from "./client-creation-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [FormsClientCreationComponent],
  exports: [FormsClientCreationComponent],
  imports: [CommonModule, ClientCreationRoutingModule, ReactiveFormsModule]
})
export class ClientCreationModule {
}

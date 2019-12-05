import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EcheancierComponent } from "./echeancier.component";

@NgModule({
  declarations: [EcheancierComponent],
  exports: [EcheancierComponent],
  imports: [CommonModule]
})
export class EcheancierModule {}

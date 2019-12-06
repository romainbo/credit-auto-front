import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-forms-simulation",
  templateUrl: "./forms-simulation.component.html",
  styleUrls: ["./forms-simulation.component.scss"]
})
export class FormsSimulationComponent implements OnInit {
  purchaseAmount: number;
  loanAmount: number;
  vehicleCategory: String;
  loanDuration: number;
  // loanCost: number;

  filterForm = new FormGroup({
    purchaseAmount: new FormControl(""),
    loanAmount: new FormControl(""),
    vehicleCategory: new FormControl(""),
    loanDuration: new FormControl("")
    // loanCost: new FormControl("")
  });

  constructor() {}

  ngOnInit() {
    // this.filterForm$ = new BehaviorSubject({
    //   set: this.filterForm.get("set").value,
    //   classe: this.filterForm.get("classe").value
    // });
  }

  submit() {
    this.purchaseAmount = this.filterForm.get("purchaseAmount").value;
    this.loanAmount = this.filterForm.get("loanAmount").value;
    this.vehicleCategory = this.filterForm.get("vehicleCategory").value;
    this.loanDuration = this.filterForm.get("loanDuration").value;
  }
}

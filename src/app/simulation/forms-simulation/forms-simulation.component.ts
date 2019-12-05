import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm,  } from "@angular/forms";

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
  loanCost: number;

  filterForm = new FormGroup({
    purchaseAmount: new FormControl(""),
    loanAmount: new FormControl(""),
    vehicleCategory: new FormControl(""),
    loanDuration: new FormControl(""),
    loanCost: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}

  submit() {
    
  }

}

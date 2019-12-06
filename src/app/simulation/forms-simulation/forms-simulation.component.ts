import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { Simulation } from "../simulation";
import { SimulationService } from "src/app/services/simulation.service";

@Component({
  selector: "app-forms-simulation",
  templateUrl: "./forms-simulation.component.html",
  styleUrls: ["./forms-simulation.component.scss"]
})
export class FormsSimulationComponent implements OnInit {
  purchaseAmount: number;
  loanAmount: number;
  vehicleCategory: string;
  loanDuration: number;
  // loanCost: number;
  createdSimulation: Simulation;
  returnedSimulation: Simulation;

  filterForm = new FormGroup({
    purchaseAmount: new FormControl(""),
    loanAmount: new FormControl(""),
    vehicleCategory: new FormControl(""),
    loanDuration: new FormControl("")
    // loanCost: new FormControl("")
  });

  constructor(private simulationService: SimulationService) {}

  ngOnInit() {
    // this.filterForm$ = new BehaviorSubject({
    //   set: this.filterForm.get("set").value,
    //   classe: this.filterForm.get("classe").value
    // });
  }

  submit() {
    this.purchaseAmount = this.filterForm.get("purchaseAmount").value;
    console.log(this.purchaseAmount);
    this.loanAmount = this.filterForm.get("loanAmount").value;
    this.vehicleCategory = this.filterForm.get("vehicleCategory").value;
    this.loanDuration = this.filterForm.get("loanDuration").value;
    this.createdSimulation = new Simulation(
      this.purchaseAmount,
      this.loanAmount,
      this.vehicleCategory,
      this.loanDuration
    );
    // this.createdSimulation = new Simulation();
    console.log(this.createdSimulation);
    this.simulationService
      .postInformationSimulation(this.createdSimulation)
      .subscribe(
        response => {
          this.returnedSimulation = response as Simulation;
          console.log(this.returnedSimulation);
        },
        error => {
          console.log(error);
        }
      );
  }
}

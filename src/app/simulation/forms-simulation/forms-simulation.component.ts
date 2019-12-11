import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, NgForm} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";
import {Simulation} from "../simulation";
import {SimulationService} from "src/app/services/simulation.service";
import {Router} from "@angular/router";

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

  isSimulated = false;

  simulationForm = new FormGroup({
    purchaseAmount: new FormControl(""),
    loanAmount: new FormControl(""),
    vehicleCategory: new FormControl(""),
    loanDuration: new FormControl("")
    // loanCost: new FormControl("")
  });

  constructor(
    private simulationService: SimulationService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    // this.simulationForm$ = new BehaviorSubject({
    //   set: this.simulationForm.get("set").value,
    //   classe: this.simulationForm.get("classe").value
    // });
  }

  submit() {
    this.purchaseAmount = this.simulationForm.get("purchaseAmount").value;
    console.log(this.purchaseAmount);
    this.loanAmount = this.simulationForm.get("loanAmount").value;
    this.vehicleCategory = this.simulationForm.get("vehicleCategory").value;
    this.loanDuration = this.simulationForm.get("loanDuration").value;
    this.createdSimulation = new Simulation(
      this.purchaseAmount,
      this.loanAmount,
      this.vehicleCategory,
      this.loanDuration
    );
    // this.createdSimulation = new Simulation();
    this.simulationService
      .postInformationSimulation(this.createdSimulation)
      .subscribe(
        response => {
          this.returnedSimulation = response as Simulation;
          console.log(this.returnedSimulation);
          this.isSimulated = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  cancel() {
    this.simulationForm.reset();
    this.isSimulated = false;
    this.router.navigate(["./simulation"]);
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { Simulation } from "../simulation";
import { SimulationService } from "src/app/services/simulation.service";
import { Router } from "@angular/router";

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

  newDate: Date = new Date();
  cumulatedMonthlyPayment: number;
  monthlyAmount: number;

  isSimulated = false;

  filterForm = new FormGroup({
    purchaseAmount: new FormControl(""),
    loanAmount: new FormControl(""),
    vehicleCategory: new FormControl(""),
    loanDuration: new FormControl("")
    // loanCost: new FormControl("")
  });

  schedules = [
    {
      newDate: this.newDate,
      monthlyAmount: this.monthlyAmount,
      cumulatedAmount: this.cumulatedMonthlyPayment += this.monthlyAmount
    }
  ];
  /*
  schedules = [
    {
      daate: Date.now,
      monthlyAmount: this.returnedSimulation.monthlyPayment,
      cumulatedAmount: this.returnedSimulation.monthlyPayment
    }
  ];*/

  constructor(
    private simulationService: SimulationService,
    private router: Router
  ) {}

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
    this.simulationService
      .postInformationSimulation(this.createdSimulation)
      .subscribe(
        response => {
          this.returnedSimulation = response as Simulation;
          console.log(this.returnedSimulation);
          this.isSimulated = true;
          this.monthlyAmount = this.returnedSimulation.monthlyPayment;
        },
        error => {
          console.log(error);
        }
      );
  }

  cancel() {
    this.filterForm.reset();
    this.isSimulated = false;
    this.router.navigate(["./simulation"]);
  }
  /*
  schedulePayment() {
    console.log(this.returnedSimulation.monthlyPayment);
    let cumulatedPayment = this.returnedSimulation.monthlyPayment;
  }*/
  /*
  switchToNextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.cdRef.detectChanges();
  }

  private finishDateMonth(loanDuration): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + loanDuration,
      this.currentDate.getDate()
    );
  }*/
}

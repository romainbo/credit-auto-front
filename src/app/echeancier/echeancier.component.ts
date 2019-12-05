import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-echeancier",
  templateUrl: "./echeancier.component.html",
  styleUrls: ["./echeancier.component.scss"]
})
export class EcheancierComponent implements OnInit {
  schedules = [
    {
      daate: "2019",
      monthlyAmount: 350,
      cumulatedAmount: 450
    }
  ];

  constructor() {}

  ngOnInit() {}
}

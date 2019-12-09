import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Client } from "../client";
import { ClientCreationService } from "src/app/services/client-creation.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-forms-client-creation",
  templateUrl: "./forms-client-creation.component.html",
  styleUrls: ["./forms-client-creation.component.scss"]
})
export class FormsClientCreationComponent implements OnInit {
  firstName: String;
  lastName: String;
  adress: String;
  birthDate: String;
  gender: String;
  mail: String;
  newClient: Client;

  creationForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    adress: new FormControl(""),
    birthDate: new FormControl(""),
    gender: new FormControl(""),
    mail: new FormControl("")
    // loanCost: new FormControl("")
  });

  constructor(
    private clientCreationService: ClientCreationService,
    private router: Router
  ) {}

  ngOnInit() {}

  submit() {
    this.firstName = this.creationForm.get("firstName").value;
    this.lastName = this.creationForm.get("lastName").value;
    this.adress = this.creationForm.get("adress").value;
    this.birthDate = this.creationForm.get("birthDate").value;
    this.gender = this.creationForm.get("gender").value;
    this.mail = this.creationForm.get("mail").value;

    this.newClient = new Client(
      this.firstName,
      this.lastName,
      this.adress,
      this.birthDate,
      this.gender,
      this.mail
    );

    this.clientCreationService
      .postNewClient(this.newClient)
      .subscribe(response => console.log(response));

    console.log(this.newClient);
  }

  cancel() {
    this.creationForm.reset();
    this.router.navigate(["./nouveauClient"]);
  }
}

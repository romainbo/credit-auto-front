<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ClientSearchService} from "../../services/client-search.service";
import {BehaviorSubject, merge, Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {Client} from "../../client-creation/client";
import { Router } from '@angular/router';
import { Simulation } from 'src/app/simulation/simulation';
import { ContractModule } from 'src/app/contract/contract.module';
=======
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ClientSearchService } from "../../services/client-search.service";
import { BehaviorSubject, merge, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Client } from "../../client-creation/client";
>>>>>>> d311f654c68c578f6afe459b0ab722388ab4af37

@Component({
  selector: "app-form-client-search",
  templateUrl: "./form-client-search.component.html",
  styleUrls: ["./form-client-search.component.scss"]
})
export class FormClientSearchComponent implements OnInit {
  email: string;
  isSearched = false;
<<<<<<< HEAD
  foundClient : Client;
  simul: Simulation

=======
  foundClient: Client;
>>>>>>> d311f654c68c578f6afe459b0ab722388ab4af37

  searchForm = new FormGroup({
    email: new FormControl("")
  });

<<<<<<< HEAD
  constructor(private clientSearchService: ClientSearchService, private router: Router) {
  }

  ngOnInit() {
    this.simul = window.history.state.data;
    console.log(this.simul);
  }
=======
  constructor(private clientSearchService: ClientSearchService) {}

  ngOnInit() {}
>>>>>>> d311f654c68c578f6afe459b0ab722388ab4af37

  submit() {
    this.email = this.searchForm.get("email").value;
    this.isSearched = true;

<<<<<<< HEAD
    this.clientSearchService
      .getClientByEmail(this.email)
      .subscribe(client =>
      this.foundClient = client);

    console.log(this.foundClient);
=======
    this.clientSearchService.getClientByEmail(this.email).subscribe(client => {
      this.foundClient = client;
      console.log(this.foundClient);
    });
>>>>>>> d311f654c68c578f6afe459b0ab722388ab4af37
  }
}

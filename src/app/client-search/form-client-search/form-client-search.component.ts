import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ClientSearchService} from "../../services/client-search.service";
import {BehaviorSubject, merge, Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {Client} from "../../client-creation/client";
import { Router } from '@angular/router';
import { Simulation } from 'src/app/simulation/simulation';

@Component({
  selector: 'app-form-client-search',
  templateUrl: './form-client-search.component.html',
  styleUrls: ['./form-client-search.component.scss']
})
export class FormClientSearchComponent implements OnInit {

  email: string;
  isSearched = false;
  foundClient : Client;
  simul: Simulation


  searchForm = new FormGroup(
    {
      email: new FormControl("")
    }
  )

  constructor(private clientSearchService: ClientSearchService, private router: Router) {
  }

  ngOnInit() {
    this.simul = window.history.state.data;
    console.log(this.simul);
  }

  submit() {
    this.email = this.searchForm.get("email").value;
    this.isSearched = true;

    this.clientSearchService
      .getClientByEmail(this.email)
      .subscribe(client =>
      this.foundClient = client);



    console.log(this.foundClient);
  }
}

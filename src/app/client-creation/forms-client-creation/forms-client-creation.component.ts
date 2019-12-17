import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Client } from '../client';
import { ClientCreationService } from 'src/app/services/client-creation.service';
import { Router } from '@angular/router';
import { Simulation } from 'src/app/simulation/simulation';

@Component({
  selector: 'app-forms-client-creation',
  templateUrl: './forms-client-creation.component.html',
  styleUrls: ['./forms-client-creation.component.scss']
})
export class FormsClientCreationComponent implements OnInit {
  firstName: String;
  lastName: String;
  adress: String;
  birthDate: String;
  gender: String;
  email: String;
  newClient: Client;
  foundClient: Client;
  simul: Simulation;

  creationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    adress: new FormControl(''),
    birthDate: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl('')
    // loanCost: new FormControl("")
  });

  constructor(
    private clientCreationService: ClientCreationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.simul = window.history.state.simu;
    this.foundClient = window.history.state.data;
  }

  submit() {
    this.firstName = this.creationForm.get('firstName').value;
    this.lastName = this.creationForm.get('lastName').value;
    this.adress = this.creationForm.get('adress').value;
    this.birthDate = this.creationForm.get('birthDate').value;
    this.gender = this.creationForm.get('gender').value;
    this.email = this.creationForm.get('email').value;

    this.newClient = new Client(
      this.firstName,
      this.lastName,
      this.adress,
      this.birthDate,
      this.gender,
      this.email
    );

    this.clientCreationService
      .postNewClient(this.newClient)
      .subscribe(response => {
        this.newClient = response;
        this.router.navigateByUrl('/createContract', {
          state: { simu: this.simul, data: this.newClient }
        });
        console.log(response);
      });

    console.log(this.newClient);
  }

  cancel() {
    this.creationForm.reset();
    this.router.navigate(['./searchclient']);
  }
}

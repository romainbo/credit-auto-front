import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientSearchService } from '../../services/client-search.service';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Client } from '../../client-creation/client';

@Component({
  selector: 'app-form-client-search',
  templateUrl: './form-client-search.component.html',
  styleUrls: ['./form-client-search.component.scss']
})
export class FormClientSearchComponent implements OnInit {
  email: string;
  isSearched = false;
  foundClient: Client;

  searchForm = new FormGroup({
    email: new FormControl('')
  });

  constructor(private clientSearchService: ClientSearchService) {}

  ngOnInit() {}

  submit() {
    this.email = this.searchForm.get('email').value;
    this.isSearched = true;

    this.clientSearchService.getClientByEmail(this.email).subscribe(client => {
      this.foundClient = client;
      console.log(this.foundClient);
    });
  }
}
function emailDomainValidator(emailId: searchForm) {
  let email = emailId.value;
  if (email && email.indexOf('@') != -1) {
    let [_, domain] = email.split('@');
    if (domain !== 'codecraft.tv') {
      return {
        emailDomain: {
          parsedDomain: domain
        }
      };
    }
  }
  return null;
}

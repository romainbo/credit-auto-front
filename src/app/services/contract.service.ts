import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ContractModule } from '../contract/contract.module';
import { Observable } from 'rxjs';
import { Client } from '../client-creation/client';
import { Contract } from '../contract/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:8080/creditAuto/contract';

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    return {
      headers
    };
  } // Méthode pour envoyer les informations du contrat et récupérer un boolean si c'est ok
  postInformationContract(contractPassed: Contract): Observable<Contract> {
    console.log('########### THERE');
    console.log(JSON.stringify(contractPassed));
    console.log(contractPassed);
    return this.httpClient.post<Contract>(
      this.url,
      JSON.stringify(contractPassed),
      this.httpOptions
    );
  }
}

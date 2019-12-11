import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ContractModule } from '../contract/contract.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8080/creditAuto/contract';


  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders({'Content-Type' : 'application/json', Accept : 'application/json'});
    return {
      headers
    };


  }  // Méthode pour envoyer les informations du contrat et récupérer un boolean si c'est ok
  postInformationContract(contract: ContractModule): Observable<ContractModule> {
    return this.httpClient.post<ContractModule>(
      this.url,
      JSON.stringify(contract),
      this.httpOptions
    );
  }
}

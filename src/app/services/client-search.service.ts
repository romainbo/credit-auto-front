import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Client} from "../client-creation/client";
import {Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientSearchService {

  constructor(private httpClient: HttpClient) {
  }

  url = "http://localhost:8080/creditAuto/searchclient?email=";
  searchForm$: Subject<string> = new Subject();

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders({'Content-Type' : 'application/json', Accept : 'application/json'});
    return {
      headers
    };
  }

  getClientByEmail(email:string): Observable<Client> {
  return this.httpClient.get<Client>(
    this.url+`${email}`,
    this.httpOptions
    );
  }
}

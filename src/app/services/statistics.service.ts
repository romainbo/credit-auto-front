import { Injectable, ErrorHandler } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Simulation } from '../simulation/simulation';
import { throwError, Observable } from 'rxjs';
import { Contract } from '../contract/contract';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:8080/creditAuto/statistics';

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    return {
      headers
    };
  }

  postDatesForStatistics(dates: any): Observable<Contract> {
    return this.httpClient.post<Contract>(
      this.url,
      JSON.stringify(dates),
      this.httpOptions
    );
  }
}

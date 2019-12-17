import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rate } from '../admin/rates/rate';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  
  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8080/creditAuto/rate';


  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders({'Content-Type' : 'application/json', Accept : 'application/json'});
    return {
      headers
    };
  }

    getAllRate(): Observable<Rate> {
      return this.httpClient.get<Rate>(
        this.url,
        this.httpOptions
      )
    };

    sendRate(rate: Rate): Observable<Rate> {
      return this.httpClient.post<Rate>(
        this.url,
        JSON.stringify(rate),
        this.httpOptions
      )
      };

}

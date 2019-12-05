import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SimulationService {
  constructor(private httpClient: HttpClient) {}

  getRate(id) {
    return this.httpClient
  }

}

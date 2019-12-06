import { Injectable, ErrorHandler } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Simulation } from "../simulation/simulation";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SimulationService {
  constructor(private httpClient: HttpClient) {}

  url = "http://localhost:8080/creditAuto/simulation";

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Content-Type": 'application/json'
  //   })
  // };

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return {
      headers
    };
  }

  // Méthode pour envoyer les informations de la simulation et récupérer le taux d'intérêt calculé en java
  postInformationSimulation(simulation: Simulation) {
    console.log("coucou");
    return this.httpClient
      .post(this.url, JSON.stringify(simulation), this.httpOptions)
      .subscribe((response: Response) => {
        console.log(response);
        console.log(response.error.error.text);
      });
  }
}

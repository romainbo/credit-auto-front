import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SimulationService {
  constructor(private httpClient: HttpClient) {}

  url = "https://omgvamp-hear0thstone-v1.p.rapidapi.com/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  // Méthode pour envoyer les informations de la simulation et récupérer le taux d'intérêt calculé en java
  postInformationSimulation(id) {
    // return this.httpClient.post();
  }
}

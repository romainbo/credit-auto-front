import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from "../client-creation/client";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClientCreationService {
  constructor(private httpClient: HttpClient) {}

  url = "http://localhost:8080/creditAuto/simulation";

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return {
      headers
    };
  }

  // Méthode pour envoyer les informations du nouveau client
  postNewClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(
      this.url,
      JSON.stringify(client),
      this.httpOptions
    );
  }
}

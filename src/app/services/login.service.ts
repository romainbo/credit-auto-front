import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../authentication/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:8080/creditAuto/login';

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    return {
      headers
    };
  }

  postLogin(user: User): Observable<User> {
    return this.httpClient.post<User>(
      this.url,
      JSON.stringify(user),
      this.httpOptions
    );
  }

  // Méthode de salim pour test springSecurity
  // postInformationLogin(user: User): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       Authorization: 'Basic ' + btoa(user.username + ':' + user.password)
  //     })
  //   };

  //   return this.httpClient.get(this.url, httpOptions);
  // }
}

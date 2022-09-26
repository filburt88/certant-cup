import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // headers = new HttpHeaders({
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  //   'Access-Control-Allow-Headers':
  //     'X-Requested-With, content-type, Authorization',
  //   Accept: 'application/json',
  //   observe: 'response',
  // });

  login(user: any): Observable<any> {
    return this.http.post('/fixture/login-usuario', user, {
      withCredentials: true,
    });
  }
}

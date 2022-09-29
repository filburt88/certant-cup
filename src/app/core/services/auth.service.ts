import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUser } from '../models/AuthUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  url: string = environment.loginServiceUrl;

  login(user: AuthUser): Observable<any> {
    return this.http.post(environment.loginServiceUrl, user, {
      withCredentials: true,
    });
  }

  logout(): Observable<any> {
    return this.http.get('fixture/logout', { withCredentials: true });
  }
}

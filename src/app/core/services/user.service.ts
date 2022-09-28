import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(page:number): Observable<User[]> {
    return this.http.get<User[]>(`fixture/ranking?pagina=${page}&cantidad=10`);
  }

  getMyRanking(): Observable<User> {
    return this.http.get<User>('fixture/ranking-usuario/');
  }
}

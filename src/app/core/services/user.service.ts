import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('fixture/ranking?pagina=1&cantidad=10');
  }

  getMyRanking(): Observable<User> {
    return this.http.get<User>('fixture/ranking-usuario/');
  }
}

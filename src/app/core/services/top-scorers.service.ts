import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root',
})
export class TopScorersService {
  constructor(private http: HttpClient) {}

  getScorers(): Observable<Player[]> {
    return this.http.get<Player[]>('fixture/goleadores/');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jackpot } from '../models/Jackpot';

@Injectable({
  providedIn: 'root',
})
export class JackpotService {
  constructor(private http: HttpClient) {}

  getJackpot(): Observable<Jackpot> {
    return this.http.get('fixture/jackpot-usuario', { withCredentials: true });
  }
}

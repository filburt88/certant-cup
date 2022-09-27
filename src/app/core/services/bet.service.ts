import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bet } from '../models/Bet';
import { BetMatch } from '../models/BetMatch';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  constructor(private http: HttpClient) {}

  getBet(betId: string): Observable<any> {
    return this.http.get<any>('fixture/apostar?idPartido=' + betId, {
      withCredentials: true,
    });
  }

  postBet(match: any): Observable<any> {
    return this.http.post<any>('fixture/apostar', match, {
      withCredentials: true,
    });
  }

  getAllBets(): Observable<any> {
    return this.http.get<any>('fixture/apuestas', {
      withCredentials: true,
    });
  }
}

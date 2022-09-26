import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bet } from '../models/Bet';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http:HttpClient) { }

  getBet(betId: string): Observable<any> {
    return this.http.get<any>('fixture/apostar?idPartido=' + betId, {
      withCredentials: true,
    });
  }
}

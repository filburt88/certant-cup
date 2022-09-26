import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BetMatch } from '../models/BetMatch';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private http: HttpClient) {}
  url: string = environment.getMatchBetById;

  getMatch(matchId: string): Observable<BetMatch> {
    return this.http.get<BetMatch>(this.url + matchId, {
      withCredentials: true,
    });
  }
}

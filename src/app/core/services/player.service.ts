import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../models/Player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getPlayers(id: number): Observable<Player[]> {
    return this.http.get<Player[]>('fixture/jugadores?equipoId=' + id, {
      withCredentials: true,
    });
  }

  postPlayerBet(player: any): Observable<any> {
    return this.http.post('fixture/goleador', player, { withCredentials: true });
  }
}

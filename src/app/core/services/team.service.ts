import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('fixture/equipo', { withCredentials: true });
  }

  postTeam(team: any): Observable<any> {
    return this.http.post<any>('fixture/campeon', team, {
      withCredentials: true,
    });
  }
}

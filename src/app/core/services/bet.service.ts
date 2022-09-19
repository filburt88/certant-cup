import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bet } from '../models/Bet';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http:HttpClient) { }

  getBetById(id:number):Observable<Bet>{
    return this.http.get<Bet>('http://localhost:3000/apostar/')
  }
}

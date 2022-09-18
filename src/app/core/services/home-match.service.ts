import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeMatch } from '../models/HomeMatch';

@Injectable({
  providedIn: 'root'
})
export class HomeMatchService {

  constructor(private http:HttpClient) { }

  getHomeMatch():Observable<HomeMatch[]>{
    return this.http.get<HomeMatch[]>('http://localhost:3000/partidos/')
  }

}

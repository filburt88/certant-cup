import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeMatch } from '../models/HomeMatch';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeMatchService {
  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }

  url: string = environment.homeMtachServiceUrl;

  constructor(private http: HttpClient) {}

  getHomeMatch(): Observable<HomeMatch[]> {
    return this.http.get<HomeMatch[]>(this.url, { withCredentials: true });
  }
}

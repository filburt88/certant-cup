import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthErrorCatchInterceptor implements HttpInterceptor {
  constructor(private router: Router, private cookieService:CookieService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorCode) => {
        this.cookieService.delete('userToken')
        console.error('Codigo del error', errorCode);
        this.router.navigate(['login']);
        return throwError(() => new Error('Unauthorized'));
      })
    );
  }
}

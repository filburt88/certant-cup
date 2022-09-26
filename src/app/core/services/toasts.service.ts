import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {
  constructor(private _snackBar:MatSnackBar) { }

  successSnackBar(message: string, action:string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['success-snackbar']
    });
  }

  errorSnackBar(message: string, action:string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['error-snackbar']
    });
  }


}

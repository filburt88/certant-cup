import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastsService } from 'src/app/core/services/toasts.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authServ: AuthService,
    private toast: ToastsService,
    private router: Router,
    private cookieService:CookieService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      contrasenia: ['', Validators.required],
    });
  }

  login(): void {
    this.authServ.login(this.form.value).subscribe({
      next: (res) => {
        console.log(res)
        this.cookieService.set('userToken', res)
        this.router.navigate(['home']);
        this.toast.successSnackBar('Bienvenido', 'Ok');
      },
      error: () => {
        this.toast.errorSnackBar('Hubo un error en el login', 'Ok');
      },
    });
  }
}

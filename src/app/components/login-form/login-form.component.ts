import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastsService } from 'src/app/core/services/toasts.service';

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
    private toast: ToastsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      contrasenia: '',
    });
  }

  login() {
    this.authServ.login(this.form.value).subscribe({
      next: () => {
        this.toast.successSnackBar('Bienvenido', 'Ok');
      },
      error: () => {
        this.toast.errorSnackBar('Hubo un error en el login', 'Ok');
      },
    });
  }
}

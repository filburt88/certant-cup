import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private authServ: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      contrasenia: '',
    });
  }

  test() {
    console.log(this.form.value);
  }

  login() {
    this.authServ.login(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}

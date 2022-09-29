import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  links: string[] = ['home', 'ranking', 'apuestas', 'goleadores', 'micuenta'];

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        console.log('ENTRE', res);
      },
      error: (res) => {
        this.cookieService.delete('userTokenCertant');
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeMatch } from 'src/app/core/models/HomeMatch';
import { HomeMatchService } from 'src/app/core/services/home-match.service';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnInit {
  matches: HomeMatch[] = [];

  constructor(
    private HomeMatchService: HomeMatchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.HomeMatchService.getHomeMatch().subscribe({
      next: (res) => {
        this.matches = res;
      },
    });
  }

  redirectToMatch(match: HomeMatch): void {
    this.router.navigate(['apuesta/' + match.idPartido]);
  }
}

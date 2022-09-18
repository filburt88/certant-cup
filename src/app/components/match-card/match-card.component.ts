import { Component, OnInit } from '@angular/core';
import { HomeMatch } from 'src/app/core/models/HomeMatch';
import { HomeMatchService } from 'src/app/core/services/home-match.service';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnInit {
  matches: HomeMatch[] = [];

  constructor(private HomeMatchService: HomeMatchService) {}

  ngOnInit(): void {
    this.HomeMatchService.getHomeMatch().subscribe({
      next: (res) => {
        this.matches = res;
      },
    });
  }
}

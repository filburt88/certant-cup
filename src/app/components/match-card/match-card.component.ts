import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { HomeMatch } from 'src/app/core/models/HomeMatch';
import { HomeMatchService } from 'src/app/core/services/home-match.service';
import { DialogBetComponent } from '../dialog-bet/dialog-bet.component';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnInit {
  matches: HomeMatch[] = [];

  constructor(
    private HomeMatchService: HomeMatchService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches() {
    this.HomeMatchService.getHomeMatch().subscribe({
      next: (res) => {
        this.matches = res;
        console.log(this.matches);
      },
    });
  }

  openDialog(match: HomeMatch) {
    this.dialog.open(DialogBetComponent, {
      data: match,
    });
    this.dialog.afterAllClosed.subscribe({
      next: () => {
        this.getMatches();
      },
    });
  }
}

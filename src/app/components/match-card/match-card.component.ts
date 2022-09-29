import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    this.HomeMatchService.getHomeMatch().subscribe({
      next: (res) => {
        this.matches = res;
      },
    });
  }

  openDialog(match: HomeMatch) {
    console.log('Soy match', match);
    this.dialog.open(DialogBetComponent, {
      data: match,
    });
  }
}
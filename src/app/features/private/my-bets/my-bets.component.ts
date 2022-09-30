import { Component, OnInit } from '@angular/core';
import { BetMatch } from 'src/app/core/models/BetMatch';
import { BetService } from 'src/app/core/services/bet.service';

@Component({
  selector: 'app-my-bets',
  templateUrl: './my-bets.component.html',
  styleUrls: ['./my-bets.component.scss'],
})
export class MyBetsComponent implements OnInit {
  betMessage: string = '';
  bets: BetMatch[] = [];

  constructor(private betService: BetService) {}

  ngOnInit(): void {
    this.betService.getAllBets().subscribe({
      next: (res) => {
        this.bets = res;
      },
      complete: () => {
        if (this.bets.length === 0) {
          this.betMessage = 'Aún no realizaste ninguna apuesta';
        }
      },
    });
  }
}

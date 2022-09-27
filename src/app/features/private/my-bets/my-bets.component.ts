import { Component, OnInit } from '@angular/core';
import { BetMatch } from 'src/app/core/models/BetMatch';
import { BetService } from 'src/app/core/services/bet.service';

@Component({
  selector: 'app-my-bets',
  templateUrl: './my-bets.component.html',
  styleUrls: ['./my-bets.component.scss'],
})
export class MyBetsComponent implements OnInit {
  bets!: BetMatch[];

  constructor(private betService: BetService) {}

  ngOnInit(): void {
    this.betService.getAllBets().subscribe({
      next: (res) => {
        console.log(res);
        this.bets = res;
      },
    });
  }
}

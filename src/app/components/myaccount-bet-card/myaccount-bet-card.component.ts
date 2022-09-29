import { Component, OnInit } from '@angular/core';
import { Jackpot } from 'src/app/core/models/Jackpot';
import { JackpotService } from 'src/app/core/services/jackpot.service';

@Component({
  selector: 'app-myaccount-bet-card',
  templateUrl: './myaccount-bet-card.component.html',
  styleUrls: ['./myaccount-bet-card.component.scss'],
})
export class MyaccountBetCardComponent implements OnInit {
  jackpot: Jackpot = {
    equipoCampeon: '',
    equipoJugadorGoleador: '',
    jugadorGoleador: '',
  };

  constructor(private jackpotService: JackpotService) {}

  ngOnInit(): void {
    this.jackpotService.getJackpot().subscribe({
      next: (res) => {
        this.jackpot = res;
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BetService } from 'src/app/core/services/bet.service';

@Component({
  selector: 'app-bet-match',
  templateUrl: './bet-match.component.html',
  styleUrls: ['./bet-match.component.scss'],
})
export class BetMatchComponent implements OnInit {
  bet!: FormGroup;
  matchId: number = 0;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private betService: BetService
  ) {}

  ngOnInit(): void {
    this.getMatchId();
    this.formBet();
  }

  submit(): void {
    console.log(this.bet.value);
  }

  getMatch(matchId: number) {
    this.betService.getBetById(matchId).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  formBet(): void {
    this.bet = this.fb.group({
      idPartido: [this.matchId],
      goles: this.fb.group({
        golesLocal: 0,
        golesVisitante: 0,
      }),
    });
  }

  getMatchId(): void {
    this.matchId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}

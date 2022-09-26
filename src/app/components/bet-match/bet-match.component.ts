import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BetMatch } from 'src/app/core/models/BetMatch';
import { BetService } from 'src/app/core/services/bet.service';
import { MatchService } from 'src/app/core/services/match.service';

@Component({
  selector: 'app-bet-match',
  templateUrl: './bet-match.component.html',
  styleUrls: ['./bet-match.component.scss'],
})
export class BetMatchComponent implements OnInit {
  form!: FormGroup;
  matchId: number = 0;
  match!: BetMatch;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private betService: BetService,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.getMatchId();
    this.getMatch();

    this.form = this.fb.group({
      golesLocal: [0, Validators.required],
      golesVisitante: [0, Validators.required],
    });
  }

  getMatch() {
    this.matchService.getMatch(String(this.matchId)).subscribe({
      next: (res) => {
        this.match = res;
      },
    });
  }

  getMatchId(): void {
    this.matchId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}

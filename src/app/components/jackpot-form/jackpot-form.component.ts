import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/core/models/Player';
import { Team } from 'src/app/core/models/Team';
import { PlayerService } from 'src/app/core/services/player.service';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-jackpot-form',
  templateUrl: './jackpot-form.component.html',
  styleUrls: ['./jackpot-form.component.scss'],
})
export class JackpotFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    idJugador: [0, Validators.required],
  });

  teams: Team[] = [];
  players: Player[] = [];
  constructor(
    private TeamService: TeamService,
    private playerService: PlayerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.TeamService.getTeams().subscribe({
      next: (res) => {
        this.teams = res;
      },
    });
  }

  getPlayers(id: number) {
    console.log('He cambiado', id)
    this.players = [];
    this.form.get('idJugador')?.setValue(0);
    this.playerService.getPlayers(id).subscribe({
      next: (res) => {
        this.players = res;
      },
    });
  }

  betScorer() {
    this.playerService.postPlayerBet(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  isValid() {
    if (this.form.get('idJugador')?.value === 0) {
      return true;
    } else {
      return false;
    }
  }
}

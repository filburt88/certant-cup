import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from 'src/app/core/models/Team';
import { TeamService } from 'src/app/core/services/team.service';
import { ToastsService } from 'src/app/core/services/toasts.service';

@Component({
  selector: 'app-jackpot-team',
  templateUrl: './jackpot-team.component.html',
  styleUrls: ['./jackpot-team.component.scss'],
})
export class JackpotTeamComponent implements OnInit {
  form: FormGroup = this.fb.group({
    idCampeon: [0, Validators.required],
  });

  teams: Team[] = [];
  constructor(
    private TeamService: TeamService,
    private fb: FormBuilder,
    private toast: ToastsService
  ) {}

  ngOnInit(): void {
    this.TeamService.getTeams().subscribe({
      next: (res) => {
        this.teams = res;
      },
    });
  }

  betChampion() {
    this.TeamService.postTeam(this.form.value).subscribe({
      next: (res) => {
        this.toast.successSnackBar('Apuesta por el campeón guardada', 'Ok');
      },
    });
  }

  isValid() {
    if (this.form.get('idCampeon')?.value !== 0) {
      return false;
    } else {
      return true;
    }
  }
}

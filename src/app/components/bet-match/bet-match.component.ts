import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BetMatch } from 'src/app/core/models/BetMatch';
import { MatchService } from 'src/app/core/services/match.service';

@Component({
  selector: 'app-bet-match',
  templateUrl: './bet-match.component.html',
  styleUrls: ['./bet-match.component.scss'],
})
export class BetMatchComponent implements OnInit {
  form: FormGroup = this.fb.group({
    golesLocal: [0, [Validators.required, Validators.max(31)]],
    golesVisitante: [0, Validators.required],
  });

  matchId: number = 0;
  match!: BetMatch;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMatchId();
    this.getMatch();
  }

  getMatch() {
    this.matchService.getMatch(String(this.matchId)).subscribe({
      next: (res) => {
        this.match = res;
      },
      complete: () => {
        if (this.match.partido.estado !== 'Abierta') {
          this.router.navigate(['home']);
        }
        this.getGolesLocal();
        this.getGolesVisitante();
      },
    });
  }

  getMatchId(): void {
    this.matchId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getGolesLocal() {
    this.match;
    if (this.match.resultadoUsuario) {
      this.form
        .get('golesLocal')
        ?.setValue(this.match.resultadoUsuario.goles.golesLocal);
    } else {
      this.form.get('golesLocal')?.setValue(0);
    }
  }

  getGolesVisitante() {
    this.match;
    if (this.match.resultadoUsuario) {
      this.form
        .get('golesVisitante')
        ?.setValue(this.match.resultadoUsuario.goles.golesVisitante);
    } else {
      this.form.get('golesVisitante')?.setValue(0);
    }
  }

  getErrorLocal() {
    if (
      this.form.controls['golesLocal'].errors?.['required'] &&
      this.form.controls['golesLocal'].dirty
    ) {
      return 'Este campo es requerido';
    } else if (
      this.form.controls['golesLocal'].errors?.['max'] &&
      this.form.controls['golesLocal'].dirty
    ) {
      return 'El número máximo de goles es 31';
    } else {
      return '';
    }
  }

  getErrorVisitante() {
    if (
      this.form.controls['golesVisitante'].errors?.['required'] &&
      this.form.controls['golesVisitante'].dirty
    ) {
      return 'Este campo es requerido';
    } else if (
      this.form.controls['golesVisitante'].errors?.['max'] &&
      this.form.controls['golesVisitante'].dirty
    ) {
      return 'El número máximo de goles es 31';
    } else {
      return '';
    }
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BetMatch } from 'src/app/core/models/BetMatch';
import { HomeMatch } from 'src/app/core/models/HomeMatch';
import { BetService } from 'src/app/core/services/bet.service';
import { MatchService } from 'src/app/core/services/match.service';
import { ToastsService } from 'src/app/core/services/toasts.service';

@Component({
  selector: 'app-dialog-bet',
  templateUrl: './dialog-bet.component.html',
  styleUrls: ['./dialog-bet.component.scss'],
})
export class DialogBetComponent implements OnInit {
  form: FormGroup = this.fb.group({
    golesLocal: [0, [Validators.required, Validators.max(31)]],
    golesVisitante: [0, [Validators.required, Validators.max(31)]],
  });

  matchId: number = 0;
  match!: BetMatch;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: HomeMatch,
    private fb: FormBuilder,
    private dialogRef: MatDialog,
    private matchService: MatchService,
    private router: Router,
    private betService: BetService,
    private toast: ToastsService
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

  submitBet() {
    let bet = {
      idPartido: this.match.partido.idPartido,
      goles: this.form.value,
    };
    this.betService.postBet(bet).subscribe({
      next: () => {
        this.toast.successSnackBar('Apuesta guardada correctamente', 'Ok');
      },
      error: () => {
        this.toast.errorSnackBar('Hubo un error al procesar tu apuesta', 'Ok');
      },
      complete: () => {
        this.dialogRef.closeAll();
      },
    });
  }

  getMatchId(): void {
    this.matchId = this.data.idPartido;
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
      return 'Requerido';
    } else if (
      this.form.controls['golesLocal'].errors?.['max'] &&
      this.form.controls['golesLocal'].dirty
    ) {
      return 'Max. 31';
    } else {
      return '';
    }
  }

  getErrorVisitante() {
    if (
      this.form.controls['golesVisitante'].errors?.['required'] &&
      this.form.controls['golesVisitante'].dirty
    ) {
      return 'Requerido';
    } else if (
      this.form.controls['golesVisitante'].errors?.['max'] &&
      this.form.controls['golesVisitante'].dirty
    ) {
      return 'Max. 31';
    } else {
      return '';
    }
  }
}

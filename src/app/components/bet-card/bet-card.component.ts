import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BetMatch } from 'src/app/core/models/BetMatch';
import { BetService } from 'src/app/core/services/bet.service';

@Component({
  selector: 'app-bet-card',
  templateUrl: './bet-card.component.html',
  styleUrls: ['./bet-card.component.scss'],
})
export class BetCardComponent implements OnInit, AfterContentInit {
  @Input() bet!: BetMatch;

  isEnabled = false;

  form = this.fb.group({
    golesLocal: [0, [Validators.required, Validators.max(31)]],
    golesVisitante: [0, [Validators.required, Validators.max(31)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.getGolesLocal();
    this.getGolesVisitante();
  }

  getGolesLocal() {
    if (this.bet.resultadoUsuario) {
      this.form
        .get('golesLocal')
        ?.setValue(this.bet.resultadoUsuario?.goles.golesLocal);
    }
  }

  getGolesVisitante() {
    if (this.bet.resultadoUsuario) {
      this.form
        .get('golesVisitante')
        ?.setValue(this.bet.resultadoUsuario?.goles.golesVisitante);
    }
  }

  isMatchFinished() {
    if (this.bet.partido.estado === 'Abierta') {
      return false;
    } else {
      this.form.controls.golesLocal.disable();
      this.form.controls.golesVisitante.disable();
      return true;
    }
  }
}

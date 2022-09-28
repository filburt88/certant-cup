import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MaterialModule } from '../material/material.module';
import { NgbootstrapModule } from '../ngbootstrap/ngbootstrap.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { HomeComponent } from './private/home/home.component';
import { FeaturesComponent } from './features.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { MatchCardComponent } from '../components/match-card/match-card.component';
import { CustomDatePipe } from '../core/pipes/custom-date.pipe';
import { TableComponent } from '../components/table/table.component';
import { RankingComponent } from './private/ranking/ranking.component';
import { SectionHeaderComponent } from '../components/section-header/section-header.component';
import { ScorersTableComponent } from '../components/scorers-table/scorers-table.component';
import { TopScorersComponent } from './private/top-scorers/top-scorers.component';
import { BetMatchComponent } from '../components/bet-match/bet-match.component';
import { BetByMatchComponent } from './private/bet-by-match/bet-by-match.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { LoginComponent } from './public/login/login.component';
import { BetCardComponent } from '../components/bet-card/bet-card.component';
import { MyBetsComponent } from './private/my-bets/my-bets.component';
import { JackpotScorerComponent } from '../components/jackpot-scorer/jackpot-scorer.component';
import { JackpotTeamComponent } from '../components/jackpot-team/jackpot-team.component';
import { JackpotComponent } from './private/jackpot/jackpot.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthErrorCatchInterceptor } from '../core/interceptors/auth-error-catch.interceptor';

@NgModule({
  declarations: [
    FeaturesComponent,
    SidenavComponent,
    HomeComponent,
    MatchCardComponent,
    CustomDatePipe,
    TableComponent,
    RankingComponent,
    SectionHeaderComponent,
    ScorersTableComponent,
    TopScorersComponent,
    BetMatchComponent,
    BetByMatchComponent,
    LoginFormComponent,
    LoginComponent,
    CarouselComponent,
    BetCardComponent,
    MyBetsComponent,
    JackpotScorerComponent,
    JackpotTeamComponent,
    JackpotComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MaterialModule,
    NgbootstrapModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthErrorCatchInterceptor,
      multi: true,
    },
  ],
})
export class FeaturesModule {}

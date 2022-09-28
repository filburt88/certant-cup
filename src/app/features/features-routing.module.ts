import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetMatchComponent } from '../components/bet-match/bet-match.component';
import { JackpotScorerComponent } from '../components/jackpot-form/jackpot-scorer.component';
import { FeaturesComponent } from './features.component';
import { BetByMatchComponent } from './private/bet-by-match/bet-by-match.component';
import { HomeComponent } from './private/home/home.component';
import { MyBetsComponent } from './private/my-bets/my-bets.component';
import { RankingComponent } from './private/ranking/ranking.component';
import { TopScorersComponent } from './private/top-scorers/top-scorers.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'goleadores', component: TopScorersComponent },
      { path: 'apuesta/:id', component: BetByMatchComponent },
      { path: 'apuestas', component: MyBetsComponent },
      { path: 'jackpot', component: JackpotScorerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

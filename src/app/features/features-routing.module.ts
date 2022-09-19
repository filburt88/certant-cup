import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetMatchComponent } from '../components/bet-match/bet-match.component';
import { FeaturesComponent } from './features.component';
import { BetByMatchComponent } from './private/bet-by-match/bet-by-match.component';
import { HomeComponent } from './private/home/home.component';
import { RankingComponent } from './private/ranking/ranking.component';
import { TopScorersComponent } from './private/top-scorers/top-scorers.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'goleadores', component: TopScorersComponent },
      { path: 'apuesta/:id', component: BetByMatchComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

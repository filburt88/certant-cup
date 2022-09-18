import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MaterialModule } from '../material/material.module';
import { NgbootstrapModule } from '../ngbootstrap/ngbootstrap.module';

import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { HomeComponent } from './private/home/home.component';
import { FeaturesComponent } from './features.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { MatchCardComponent } from '../components/match-card/match-card.component';
import { CustomDatePipe } from '../core/pipes/custom-date.pipe';

@NgModule({
  declarations: [FeaturesComponent, SidenavComponent, HomeComponent, CarouselComponent, MatchCardComponent, CustomDatePipe],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MaterialModule,
    NgbootstrapModule
  ],
})
export class FeaturesModule {}

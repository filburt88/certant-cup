import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { HomeComponent } from './private/home/home.component';
import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [FeaturesComponent, SidenavComponent, HomeComponent],
  imports: [CommonModule, FeaturesRoutingModule, MaterialModule],
})
export class FeaturesModule {}

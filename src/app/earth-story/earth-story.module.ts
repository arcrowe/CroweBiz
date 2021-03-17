import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarthStoryRoutingModule } from './earth-story-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BaseComponent } from './components/base/base.component';
import { ReferencesComponent } from './components/references/references.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { ModelsComponent } from './components/models/models.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, BaseComponent, ReferencesComponent, TimeLineComponent, ModelsComponent],
  imports: [
    CommonModule,
    EarthStoryRoutingModule
  ]
})
export class EarthStoryModule { }

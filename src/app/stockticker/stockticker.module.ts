import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocktickerRoutingModule } from './stockticker-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataVisualizationComponent } from './components/data-visualization/data-visualization.component';
import {FormsModule} from '@angular/forms';
import {PlotlyModule} from 'angular-plotly.js';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, DataVisualizationComponent],
  imports: [
    CommonModule,
    StocktickerRoutingModule,
    FormsModule,
    PlotlyModule,
  ]
})
export class StocktickerModule { }

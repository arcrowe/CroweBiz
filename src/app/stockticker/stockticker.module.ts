import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocktickerRoutingModule } from './stockticker-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    StocktickerRoutingModule
  ]
})
export class StocktickerModule { }

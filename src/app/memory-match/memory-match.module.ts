import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryMatchRoutingModule } from './memory-match-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [NavbarComponent, HomeComponent, GameCardComponent, ModalComponent],
  imports: [
    CommonModule,
    MemoryMatchRoutingModule
  ]
})
export class MemoryMatchModule { }

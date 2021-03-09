import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TictactoeRoutingModule } from './tictactoe-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, ModalComponent, BoardComponent, SquareComponent],
  imports: [
    CommonModule,
    TictactoeRoutingModule
  ]
})
export class TictactoeModule { }

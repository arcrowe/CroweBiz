import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TictactoeRoutingModule } from './tictactoe-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, ModalComponent],
  imports: [
    CommonModule,
    TictactoeRoutingModule
  ]
})
export class TictactoeModule { }

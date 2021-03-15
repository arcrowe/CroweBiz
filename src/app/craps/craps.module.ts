import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrapsRoutingModule } from './craps-routing.module';
import { HomeComponent } from './components/home/home.component';
import {AbsoluteValuePipe} from './absolute-value.pipe';
import { DiceComponent } from './components/dice/dice.component';
import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [HomeComponent,    AbsoluteValuePipe, DiceComponent, TableComponent, NavbarComponent],
  imports: [
    CommonModule,
    CrapsRoutingModule
  ]
})
export class CrapsModule { }

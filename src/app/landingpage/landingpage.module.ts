import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingpageRoutingModule} from './landingpage-routing.module';
import {MainComponent} from './main/main.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './card/card.component';


@NgModule({
  declarations: [MainComponent, NavbarComponent, FooterComponent, CardComponent],
  imports: [
    CommonModule,
    LandingpageRoutingModule,
  ]
})
export class LandingpageModule {
}

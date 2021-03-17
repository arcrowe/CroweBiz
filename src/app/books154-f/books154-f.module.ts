import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Books154FRoutingModule} from './books154-f-routing.module';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {BooklistComponent} from './components/booklist/booklist.component';
import {BaseComponent} from './components/base/base.component';
import {FormsModule} from '@angular/forms';
import {SinglebookComponent} from './components/singlebook/singlebook.component';



@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    SearchBarComponent,
    BooklistComponent,
    BaseComponent,
    SinglebookComponent,
  ],
  imports: [
    CommonModule,
    Books154FRoutingModule,
    FormsModule
  ],
  exports: [],
})
export class Books154FModule {
}

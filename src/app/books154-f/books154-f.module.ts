import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Books154FRoutingModule} from './books154-f-routing.module';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
// import {BooksService} from './services/books.service';


@NgModule({
  declarations: [HomeComponent, FooterComponent, NavbarComponent, CarouselComponent, SearchBarComponent],
  imports: [
    CommonModule,
    Books154FRoutingModule
  ],
  exports: [
  ],
})
export class Books154FModule {
}

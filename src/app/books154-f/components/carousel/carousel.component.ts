import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/Book';
import {BooksService} from '../../services/books.service';
import {Special} from '../../models/Special';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  books: Book[];

  @Input() special: Special;


  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    // this.bookService.getBooks().subscribe(
    //   data => {
    //     this.books = data;
    //     // this.books = this.books.splice(0, 15);
    //   }
    // );
    this.bookService.getSpecialBooks(this.special.id.toString()).subscribe(
      data => {
        this.books = data;
      }
    );
  }
}


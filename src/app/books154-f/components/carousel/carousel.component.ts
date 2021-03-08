import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/Book';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  books: Book[];
  @Input() title;
  @Input() category;
  @Input() logo;


  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    // this.bookService.getBooks().subscribe(
    //   data => {
    //     this.books = data;
    //     this.books = this.books.splice(0, 15);
    //   }
    // );
    this.bookService.getSpecialBooks(this.category).subscribe(
      data => {
        this.books = data;
      }
    );
  }

  viewAll(): void {
    console.log('i was clicked');
  }
}


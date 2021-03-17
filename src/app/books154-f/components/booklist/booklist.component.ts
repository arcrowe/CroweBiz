import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {Book} from '../../models/Book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  id: string;
  type: string;
  keywords = '';
  books: Book[] = [];

  constructor(private route: ActivatedRoute,
              private bookService: BooksService) {

  }

  ngOnInit(): void {

    this.keywords = this.route.snapshot.paramMap.get('keywords');
    if (this.keywords) {

      this.bookService.getSearchBooks(this.keywords).subscribe(
        data => {
          this.books = data;
          this.keywords = '';
        }
      );

    } else {
      this.type = this.route.snapshot.paramMap.get('type');
      this.id = this.route.snapshot.paramMap.get('id');
      this.bookService.getSpecialBooks(this.id).subscribe(
        data => {
          this.books = data;
        }
      );
    }
  }


}


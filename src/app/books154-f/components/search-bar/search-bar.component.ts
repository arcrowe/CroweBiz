import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    value = 'robb';
    this.bookService.getSearchBooks(value);

  }
}

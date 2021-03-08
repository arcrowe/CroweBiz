import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {BooksService} from '../../services/books.service';


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

  onSubmit(value: string) {
    value = 'robb';
    console.log(`inside onsubmit ${value}`);
    this.bookService.getSearchBooks(value);
  }
}

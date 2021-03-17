import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {Book} from '../../models/Book';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  id: string;
  book: Book;


  constructor(private route: ActivatedRoute,
              private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(this.id).subscribe(
      data => {
        this.book = data[0];
      }
    );

  }
}

import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {Special} from '../../models/Special';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showBookList = false;
  // specialCategories = [1, 2, 3, 4, 5];
  specials: Special[] = [];

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.bookService.getSpecials().subscribe(
      data => {
        this.specials = data;
      }
    );
  }

}

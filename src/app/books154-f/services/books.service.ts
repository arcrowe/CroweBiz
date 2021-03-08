import { Injectable } from '@angular/core';
import {Books154FModule} from '../books154-f.module';
import {Book} from '../models/Book';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [];
  searchResults = new BehaviorSubject<any>(null);
  // public scChangeNumberItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  baseUrl = 'http://127.0.0.1:8000/api/svc/';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}books/`);
  }

  getSpecialBooks(cat: string): Observable<any> {
    return this.http.get(`${this.baseUrl}books/?special_category=${cat}`);
  }

  getSearchBooks(cat: string): any {
    console.log(`inside getSearch Books ${cat}`);
    return this.http.get(`${this.baseUrl}search/?search=${cat}`).subscribe(
      results => {
        console.log(cat);
        console.log(results);
        this.searchResults.next(results);
      }
    );
  }

  onResults() {
    return this.searchResults.asObservable();
  }
}

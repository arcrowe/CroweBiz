import {Injectable} from '@angular/core';
import {Books154FModule} from '../books154-f.module';
import {Book} from '../models/Book';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {delay, tap} from 'rxjs/operators';

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

  getSpecialBooks(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}books/?special_category=${id}`);
  }

  getSearchBooks(keywords: string): any {
    console.log(`inside getSearch Books ${keywords}`);
    return this.http.get(`${this.baseUrl}search/?search=${keywords}`).subscribe(
      results => {

        console.log(keywords);
        console.log(results);

        this.searchResults.next(results);
      }
    );
  }

  getSpecials(): Observable<any> {
    return this.http.get(`${this.baseUrl}specials/`);
  }


  onResults(): Observable<any> {
    return this.searchResults.asObservable();
  }
}

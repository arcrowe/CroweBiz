import {EventEmitter, Injectable} from '@angular/core';
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

  baseUrl = 'http://127.0.0.1:8000/api/svc/';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}books/`);
  }

  getBook(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}book/?id=${id}`);
  }

  getSpecialBooks(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}books/?special_category=${id}`);
  }

  getSearchBooks(keywords: string): any {
    return this.http.get(`${this.baseUrl}search/?search=${keywords}`);
  }

  getSpecials(): Observable<any> {
    return this.http.get(`${this.baseUrl}specials/`);
  }


}

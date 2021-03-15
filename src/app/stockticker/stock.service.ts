import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stocks: any = [];


  constructor(private http: HttpClient) {
  }

  getStock(startdate, enddate, company, pctChange): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/getStock?startdate=' + startdate +
      '&enddate=' + enddate + '&companies=' + company + '&pctChange=' + pctChange);
  }
}

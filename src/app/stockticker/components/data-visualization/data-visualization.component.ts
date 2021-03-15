import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockService} from '../../stock.service';
import {last} from 'rxjs/operators';
// import {Stock} from '../app.component';

declare const Plotly;


@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.css']
})
export class DataVisualizationComponent implements OnInit {

  graph;
  stocks: any[][] = [];
  indices: string[] = [];
  startdate = '2020-12-26';
  enddate = '2021-01-01';
  companies = 'SPY';
  pctChange = false;

  data: any = [];
  layout: any = {};
  title = '';
  ytitle = 'Stock Price';


  constructor(private gs: StockService) {
  }

  ngOnInit(): void {
  }


  getStock(): void {
    this.data.length = 0;
    this.title = '';
    this.gs.getStock(this.startdate, this.enddate, this.companies, this.pctChange).subscribe((res: any) => {
      this.stocks = res.data;
      this.indices = res.index;
      console.log(this.indices);
      console.log(this.stocks);

      for (let i = 1; i < this.indices.length; i++) {
        this.data.push(
          {
            y: this.stocks[i],
            x: this.stocks[0],
            type: 'scatter',
            name: this.indices[i]
          });
        this.title += this.indices[i] + ' and ';
      }
      const lastIndex = this.title.lastIndexOf(' and ');
      this.title = this.title.substring(0, lastIndex);
      if (this.pctChange) {
        this.title += `<br> Percent change from ${this.startdate}`;
        this.ytitle = '% Change';
      }

      this.graph = {

        data: this.data,
        layout: {
          responsive: true,
          autosize: true,
          title: {text: this.title},
          xaxis: {
            title: {text: 'Dates'},
          },
          yaxis: {
            title: {text: this.ytitle},
          },
          plot_bgcolor: '#E8EAE6',
          margin: {
            l: 80,
            r: 20,
            t: 50,
            b: 80,
            pad: 0
          }
        },
        config: {
          responsive: true
        }
      };
    });
  }

  getDummy(): void {
    console.log(`startdate ${this.startdate}`);
    console.log(`enddate ${this.enddate}`);
    console.log(`companies ${this.companies}`);
    console.log(`pctChange ${this.pctChange}`);
  }
}


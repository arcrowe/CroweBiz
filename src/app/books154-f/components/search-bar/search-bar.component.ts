import {Component, DoCheck, OnInit} from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  keywords: string;


  constructor() {
  }

  ngOnInit(): void {
  }



  clear(): void {
    this.keywords = '';
  }
}

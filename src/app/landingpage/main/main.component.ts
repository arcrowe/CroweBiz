import {Component, OnInit} from '@angular/core';

export interface Project {
  title: string;
  image: string;
  text: string;
  url: string;
  technology: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  p1: Project = {
    title: 'Books154F',
    image: 'assets/images/Books154FImage.JPG',
    text: 'Online Bookstore ',
    technology: 'Front: Angular - Backend: Django Rest',
    url: 'books154f/'
  };
  p2: Project = {
    title: 'Memory Match',
    image: 'assets/images/MMImage.JPG',
    text: 'Memory Match with Animation',
    technology: 'Angular',
    url: 'memory/'
  };
  p3: Project = {
    title: 'Tic Tac Toe',
    image: 'assets/images/TicTacToeImage.JPG',
    text: 'Yet to be converted from Python',
    technology: 'Angular',
    url: 'tictactoe/'
  };
  p4: Project = {
    title: 'Stocker Ticker',
    image: 'assets/images/stockticker.jpeg',
    text: 'Yet to be converted from Python',
    technology: 'Angular, Plotly Dash Django',
    url: ''
  };
  p5: Project = {
    title: 'All Aboard',
    image: 'assets/images/traingroup1.png',
    text: 'Yet to be converted from Flask',
    technology: 'Angular, Django Rest',
    url: ''
  };

  projects: Project[] = [this.p1, this.p2, this.p3, this.p4,this.p5];


  constructor() {
  }

  ngOnInit(): void {
  }

}

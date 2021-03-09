import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalOpen = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.modalOpen = !this.modalOpen;
  }

  restart(): void {
    this.modalOpen = false;
  }

}

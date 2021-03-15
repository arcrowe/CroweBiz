import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() {
  }

  die1: number;
  die2: number;
  message = 'Welcome - Place $100 Bet on Pass Line';
  point;
  show4 = false;
  show5 = false;
  show6 = false;
  show8 = false;
  show9 = false;
  show10 = false;
  winnings = 0;
  bet = 100;
  betplaced = false;
  rolling = false;


  ngOnInit(): void {
    // this.startNewGame();

  }

  come(): void {
    console.log('come line');
  }

  pass(): void {
    console.log('pass line');
    this.betplaced = true;
  }

  dont_pass(): void {
    console.log('dont pass line');
  }

  dont_come(): void {
    console.log('dont come line');
  }

  field(): void {
    console.log('field');
  }

  big6(): void {
    console.log('big6');
  }

  big8(): void {
    console.log('big8');
  }

  seven(): void {
    console.log('seven');
  }

  getRandomNumber(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  rollDice(): void {
    this.rolling = true;
    of(true).pipe(
      delay(1000),
      tap(() => {
        this.rolling = false;
        this.rollDice2();
      })).subscribe();
  }

  rollDice2(): void {
    this.die1 = this.getRandomNumber(1, 6);
    this.die2 = this.getRandomNumber(1, 6);
    const total = this.die1 + this.die2;
    // console.log(`roll ${total} - point ${this.point}`);
    if (total === 7) {
      if (this.point) {
        this.message = '7 Rolled - Pass Line Loses - Place Bet to Continue';
        this.winnings -= this.bet;
        this.toggleShow();
        this.point = null;
        this.betplaced = false;
      } else {
        this.message = '7 Rolled - Pay the Player - Place Bet to Continue';
        this.winnings += this.bet;
        this.betplaced = false;
      }
    } else if (total === 12 || total === 2 || total === 3) {
      if (this.point) {
        this.message = `Roll is ${total}`;
      } else {
        this.message = 'Craps - Pass Line Loses - Place Bet to Continue';
        this.winnings -= this.bet;
        this.betplaced = false;
      }
    } else if (total === 11) {
      if (this.point) {
        this.message = `Roll is ${total}`;
      } else {
        this.message = '11 Rolled -  Pay the Player - Place Bet to Continue';
        this.winnings += this.bet;
        this.betplaced = false;
      }
    } else {
      if (this.point) {
        if (this.point === total) {
          this.message = 'We have a winner - Pay the Player - Place Bet to Continue';
          this.winnings += this.bet;
          this.toggleShow();
          this.point = null;
          this.betplaced = false;
        } else {

          this.message = `Roll is ${total}`;
        }
      } else {

        this.point = total;
        this.message = `Point is ${this.point}`;
        this.toggleShow();
      }
    }
  }


  toggleShow(): void {
    if (this.point === 4) {
      this.show4 = !this.show4;
    } else if (this.point === 5) {
      this.show5 = !this.show5;
    } else if (this.point === 6) {
      this.show6 = !this.show6;
    } else if (this.point === 8) {
      this.show8 = !this.show8;
    } else if (this.point === 9) {
      this.show9 = !this.show9;
    } else if (this.point === 10) {
      this.show10 = !this.show10;
    }
  }

}

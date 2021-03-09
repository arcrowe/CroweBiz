import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: string[] = [];
  modalOpen = false;
  player1 = true;
  message = '';
  count = 0;
  computer = false;
  winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


  constructor() {

  }

  ngOnInit(): void {
    this.squares = [
      '', '', '', '', '', '', '', '', ''
    ];
  }

  squareClicked_2Player(i: number): void {

    if (!this.computer) {

      if (this.player1) {
        this.squares[i] = 'X';
        this.count++;
      } else {
        this.squares[i] = 'O';
        this.count++;
      }
      this.player1 = !this.player1;

    } else {
      this.squares[i] = 'X';
      this.count++;
      if (this.count < 9) {
        const choice: string = this.computerChoice();
        this.squares[parseInt(choice, 10)] = 'O';
        this.count++;
      }

    }

    const winner = this.isWinner();
    if (winner) {
      this.modalOpen = true;
      this.message = winner === 'T' ? 'Tied game.' : `${winner} won!`;
    }
  }

  isWinner(): string {
    const indicesX = this.squares.map((e, i) => e === 'X' ? i : '').filter(String);
    const indicesO = this.squares.map((e, i) => e === 'O' ? i : '').filter(String);
    for (const i in this.winning) {
      if (this.winning[i].every(o => indicesX.includes(o))) {
        return 'X';
      } else if (this.winning[i].every(o => indicesO.includes(o))) {
        return 'O';
      }
    }
    // if no match and full board - return tie
    if (this.count === 9) {
      return 'T';
    }
    return '';
  }

  onClick(): void {
    this.modalOpen = !this.modalOpen;
  }

  restart(): void {
    this.modalOpen = false;
    this.squares = [
      '', '', '', '', '', '', '', '', ''
    ];
    this.player1 = true;
    this.count = 0;
  }

  computerChoice(): any {
    // opponent's boxes
    const indicesX = this.squares.map((e, i) => e === 'X' ? i : '').filter(String);

    // # combinations that will lead to win
    const threats = [
      [[0, 1], [1, 2], [0, 2]],
      [[3, 4], [4, 5], [3, 5]],
      [[6, 7], [7, 8], [6, 8]],
      [[0, 3], [3, 6], [0, 6]],
      [[1, 4], [4, 7], [1, 7]],
      [[2, 5], [5, 8], [2, 8]],
      [[0, 4], [4, 8], [0, 8]],
      [[2, 4], [4, 6], [2, 6]],
    ];
    // first block opponent
    for (const threat of threats) {
      for (const combo of threat) {
        if (combo.every(o => indicesX.includes(o))) {
          // console.log(`threat found ${threats[i][j]}`);
          // console.log(`threat found ${threats[i]}`);
          const merged = [].concat.apply([], threat);
          const potentialSpot = [...new Set(merged.filter(e => !indicesX.includes(e)))][0];
          console.log(` threat[0] : ${potentialSpot}`);
          console.log(` typeof(threat[0]) : ${typeof potentialSpot}`);
          // @ts-ignore
          if (!this.squares[potentialSpot]) {
            return potentialSpot;
          }
        }
      }
    }
    // find a threatening square for the computer






    // finally - pick an empty square
    for (const i in this.squares) {
      if (!this.squares[i]) {
        console.log(i);
        return parseInt(i, 10);
      }
    }

  }


}

import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit, OnChanges {

  @Input() die1;
  @Input() die2;
  @Input() rolling;


  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const total = this.die1 + this.die2;
  }

  ngOnInit(): void {
    console.log(`ngOnInit : ${this.rolling}`);

  }


}


import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() playAgain = new EventEmitter();
  @Input() message;

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }

  onPlayAgain() {
    this.playAgain.emit();
  }

}

import {Component, OnInit, ElementRef, OnDestroy, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();
  @Output() playAgain = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onClose() {
    this.close.emit();
  }

  onPlayAgain() {
    this.playAgain.emit();
  }

}

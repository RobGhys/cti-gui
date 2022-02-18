import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  // Event emitter to manage side bar
  @Output() toggleEventEmitter: EventEmitter<any> = new EventEmitter();

  toggleEvent(event: any): void {
    this.toggleEventEmitter.emit(event);
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}

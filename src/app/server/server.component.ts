import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  arr: number[];
  randomNumber: number = 12;
  constructor() {
    this.randomNumber = Math.random() > 0.5 ? 1 : 0;
    this.arr = [123, 456];
  }
  getColor() {
    return this.randomNumber == 1 ? 'blue' : 'cyan';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  show: boolean = false;
  someText: string = '';
  constructor() {
    // setTimeout(() => {
    //   this.show = true;
    // }, 3000);
  }
  buttonEvent() {
    this.someText = 'welcome!!';
  }
  getInput(event: Event) {
    this.someText = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}

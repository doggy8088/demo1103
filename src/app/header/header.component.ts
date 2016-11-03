import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Hello World';

  title_url = 'http://blog.miniasp.com/';

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event) {
    console.log($event);
    this.title = 'The Will Will Web';
  }
}

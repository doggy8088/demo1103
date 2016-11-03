import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Hello World';

  title_url = 'http://blog.miniasp.com/';

  num = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event: MouseEvent) {
    console.log($event);
    if($event.ctrlKey) {
      this.title = 'The Will Will Web';
    }
  }

  applyHighlight() {
    return {'highlight': this.num%2==0};
  }
}

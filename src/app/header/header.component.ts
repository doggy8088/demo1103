import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title = 'Hello World';

  @Output()
  change = new EventEmitter<string>();

  title_url = 'http://blog.miniasp.com/';

  num = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event: MouseEvent) {
    console.log($event);
    if($event.ctrlKey) {
      this.title = 'The Will Will Web';
      this.change.emit(this.title);
    }
  }

  applyHighlight() {
    return {'highlight': this.num%2==0};
  }
}

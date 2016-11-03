import { DataService } from './../data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title_url = 'http://blog.miniasp.com/';

  num = 0;

  constructor(private datasvc: DataService) { }

  ngOnInit() {
  }

  changeTitle($event: MouseEvent) {
    console.log($event);
    if($event.ctrlKey) {
      this.datasvc.title = 'The Will Will Web';
      this.datasvc.keyword = 'The Will Will Web';
    }
  }

  applyHighlight() {
    return {'highlight': this.num%2==0};
  }
}

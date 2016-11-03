import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  keyword = 'TEST';

  clearKeyword() {
    this.keyword='';
  }

  doSearch($event: KeyboardEvent, elm: HTMLInputElement) {
    console.log($event);
    this.keyword = elm.value;
  }
}

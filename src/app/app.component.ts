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

  doSearch($event: KeyboardEvent) {
    console.log($event);
    var elm = $event.target as HTMLInputElement;
    this.keyword = elm.value;
  }
}

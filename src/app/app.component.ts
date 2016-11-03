import { Component } from '@angular/core';
import { Http } from '@angular/http';

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

  doSearch(str: string) {
    this.keyword = str;
    this.title = str;
  }

  data;

  constructor(private http: Http) {
    // RxJS
    http.get('/assets/articles.json')
        .subscribe((value) => {
          this.data = value.json();
        });
  }
}

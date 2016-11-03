import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class DataService {

  data;

  constructor(private http: Http) {
    // RxJS
    http.get('/assets/articles.json')
        .subscribe((value) => {
          this.data = value.json();
        });
  }

  title = 'app works!';

  keyword = 'TEST';

  clearKeyword() {
    this.keyword='';
    this.title='';
  }

  doSearch(str: string) {
    this.keyword = str;
    this.title = str;
  }

}

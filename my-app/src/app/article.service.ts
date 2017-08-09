import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';


@Injectable()
export class ArticleService {
  articles: any;

  constructor(private http: Http) {

  }

  getListAllArticle() {
    return this.http.get('/assets/articles.json').map(res => res.json());
  }

  getDetailArticle() {
    return this.http.get('/assets/articles.json').map(res => res.json());
  }
}

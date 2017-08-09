import { Component } from '@angular/core';
import { ArticleService } from './article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./app.component.css']
})

export class ArticleComponent {
  articles: any;

  constructor(private articleService: ArticleService) {
    this.articles = [];
    this.articleService.getListAllArticle().subscribe((data: any) => {
      this.articles = data.articles;
    })
  }
}

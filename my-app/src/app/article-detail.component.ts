import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from './article.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./app.component.css']
})

export class ArticleDetailComponent implements OnInit, OnDestroy {
  article: any;
  id: number;
  private sub: any;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this.articleService.getDetailArticle().subscribe((data: any) => {
      this.article = data.articles.find(obj => {
        return obj.id === this.id;
      });
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

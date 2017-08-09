import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from './article.service'
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./app.component.css']
})

export class ArticleEditComponent implements OnInit, OnDestroy {
  articleForm: FormGroup;
  article: any;
  id: number;
  private sub: any;
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.articleForm = this.formBuilder.group({
      
    })
  }

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

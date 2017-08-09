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
  articleObj: any;
  id: number;
  imageUrl: string;
  private sub: any;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.articleForm = this.formBuilder.group({
      id: ['', []],
      title: ['', [Validators.required]],
      // image: ['', [Validators.required]],
      content: ['', [Validators.required]],
      author: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this.articleService.getDetailArticle().subscribe((data: any) => {
      // console.log(data.articles);
      this.articleObj = data.articles.find(obj => {
        return obj.id === this.id;
      });
      // console.log(this.articleObj);
      this.imageUrl = this.articleObj.image;
      this.articleForm.controls.id.setValue(this.articleObj.id);
      this.articleForm.controls.title.setValue(this.articleObj.title);
      this.articleForm.controls.content.setValue(this.articleObj.content);
      this.articleForm.controls.author.setValue(this.articleObj.author);
      // console.log(this.articleForm.value);
    })
  }

  editArticle() {
    this.router.navigate(['/home'])
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

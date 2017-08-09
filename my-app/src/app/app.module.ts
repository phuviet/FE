import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { Http, HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { ArticleComponent } from './article.component'
import { ArticleDetailComponent } from './article-detail.component'
import { ArticleEditComponent } from './article-edit.component'
import { ArticleService } from './article.service'

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'articles/:id/edit', component: ArticleEditComponent }
];

export const routing = RouterModule.forRoot(routes)

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDetailComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    routing
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

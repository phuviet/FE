import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { Http, HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { ArticleComponent } from './article.component'
import { ArticleDetailComponent } from './article-detail.component'
import { ArticleEditComponent } from './article-edit.component'
import { HomeComponent } from './home.component'
import { ArticleService } from './article.service'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
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
    ArticleEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './products.service';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'

const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: ProductDetailComponent},
  { path: 'cart', component: CartComponent }
]

export const routing = RouterModule.forRoot(routes)

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

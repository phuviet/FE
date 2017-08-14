import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';


@Injectable()
export class ProductsService {

  carts: any;
  product: any;
  number_item: number;

  constructor(
    private http: Http
    ) {
    this.number_item = 0;
    this.carts = [];
  }

  getAllListProducts() {
    return this.http.get('/data/products.json').map(res => res.json());
  }

  getDetailProduct() {
    return this.http.get('/data/products.json').map(res => res.json());
  }

  getAllListCarts() {
    return this.carts;
  }

  addProductToCart(id: number) {
    this.getDetailProduct().subscribe((data: any) => {
      this.product = data.products.find(obj => {
        return obj.id === id;
      })
      console.log(this.product);
      // this.productsService.carts.push(this.product);
      if(this.carts != '' && this.carts.find(obj => { return obj.id === id }) !== undefined ) {
        this.carts.map(res => {
          if(res.id === id) {
            res.quantity += 1;
            // console.log(res.quantity);
          }
          res.price_format = res.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
          res.total_price = res.quantity * res.price;
          res.total_price_format = (res.quantity * res.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        })
      }
      else {
        // console.log(this.product);
        // console.log('Buy Ok');
        this.product.price_format = this.product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        this.product.quantity = 1;
        this.product.total_price = this.product.quantity * this.product.price;
        this.product.total_price_format = (this.product.quantity * this.product.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        this.carts.push(this.product);
      }
      this.number_item = this.carts.length;
      // console.log(this.number_item);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Object>;

  constructor(
    private productsService: ProductsService
    ) { 
    this.productsService.getAllListProducts().subscribe((data: any) => {
      this.products = data.products;
      this.products.map(res => {res['price_format'] = res['price'].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");});
    })
  }

  ngOnInit() {
  }

  addProductToCart(id: number) {
    this.productsService.addProductToCart(id);
  }

}

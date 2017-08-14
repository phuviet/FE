import { Component, OnChanges, DoCheck } from '@angular/core';
import { ProductsService } from './products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges, DoCheck {

  number_item: number;
  constructor(
    private productsService: ProductsService
    ) {
  }

  ngOnChanges() {}

  ngDoCheck() {
    this.number_item = this.productsService.number_item;
    // console.log(this.productsService.number_item);
  }
}

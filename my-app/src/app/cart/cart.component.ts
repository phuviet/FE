import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service'
import { ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartObj: any;
  carts: any;
  total: number;
  total_format: string;
  id: number;
  // private sub: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
    ) {
    // this.id = 3;
    this.total = 0;
    this.carts = [
        // {
        //   id: 3,
        //   name: 'Hoa cẩm chướng',
        //   describe: 'Mô tả hoa cẩm chướng',
        //   image: 'http://blogcaycanh.vn/files/large/8f3c93f4c1bc87a',
        //   price: 20000,
        //   price_format: '20000'.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."),
        //   quantity: 1,
        //   total_price: 20000,
        //   total_price_format: '20000'.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        // },
        // {
        //   id: 1,
        //   name: "Hoa Hồng",
        //   describe: "Mô tả hoa hồng",
        //   image: "http://hoatuoibattu.vn/wp-content/uploads/2014/12/hoa-hong-mau-tim-1.jpg",
        //   price: 15000,
        //   price_format: '15000'.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."),
        //   quantity: 1,
        //   total_price: 15000,
        //   total_price_format: '15000'.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        // }
      ];

      
    }

    ngOnInit() {
      // this.sub = this.route.params.subscribe(params => {
      //   this.id = +params['id'];
      //   console.log(this.id);
      // })

      // this.productsService.getDetailProduct().subscribe((data: any) => {
      //   this.cartObj = data.products.find(obj => {
      //     return obj.id == this.id;
      //   })
        // this.carts.push(this.cartObj);
        // console.log(this.cartObj);

        this.carts = this.productsService.carts;
        this.carts.map(res => {
          this.total += res.total_price;
        })
        this.total_format = this.total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      // })
    }

    // ngOnDestroy() {
    //   this.sub.unsubscribe();
    // }

  }

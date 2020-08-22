import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../service/product.service";

import { Product } from "../../interfaces/Products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[]

  ngOnInit(): void {
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
  }

}

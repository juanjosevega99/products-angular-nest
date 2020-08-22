import { Component, OnInit } from '@angular/core';
import { Product } from "../../interfaces/Products";
import { ProductService } from "../../service/product.service";
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-produc-form',
  templateUrl: './produc-form.component.html',
  styleUrls: ['./produc-form.component.css']
})
export class ProducFormComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: '',
  }

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

}

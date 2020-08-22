import { Component, OnInit } from '@angular/core';
import { Product } from "../../interfaces/Products";
import { ProductService } from "../../service/product.service";

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

  constructor() { }

  ngOnInit(): void {
  }

  submitProduct() {

  }

}

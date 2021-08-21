import { Component, Input, OnInit } from '@angular/core';
import { CarService } from 'src/app/cart/cart.service';
import { IProduct } from '../../models/IProduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input('product') product: IProduct;
  constructor(
    private productsService: ProductsService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    console.log(this.product);
  }

  addCart(product: IProduct) {
    console.log('ss');
    this.carService.addProduct(product);
  }
}

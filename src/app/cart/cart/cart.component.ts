import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/models/IProduct';
import { CarService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productsCar: IProduct[] = [];
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCar().subscribe((carProducts) => {
      this.productsCar = carProducts;
    });
  }

  deleteProduct(product: IProduct) {
    this.carService.deleteProduct(product);
  }
}

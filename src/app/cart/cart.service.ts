import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../products/models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  carProducts: IProduct[];
  car: BehaviorSubject<IProduct[]> = new BehaviorSubject(null);
  constructor() {
    this.carProducts = JSON.parse(localStorage.getItem('car'))
      ? JSON.parse(localStorage.getItem('car'))
      : [];
    this.car.next(this.carProducts);
  }

  getCar(): Observable<IProduct[]> {
    return this.car;
  }

  addProduct(product: any) {
    this.carProducts.push(product);
    localStorage.setItem('car', JSON.stringify(this.carProducts));
  }

  deleteProduct(product: IProduct) {
    const index = this.carProducts
      .map(function (e) {
        return e.id;
      })
      .indexOf(product.id);
    if (index > -1) {
      this.carProducts.splice(index, 1);
    }
    localStorage.setItem('car', JSON.stringify(this.carProducts));
  }
}

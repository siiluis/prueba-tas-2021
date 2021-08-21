import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/cart/cart.service';
import { ICategorie } from 'src/app/categories/models/ICategorie';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { IProduct } from '../../models/IProduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: IProduct[] = [];
  productsFilter: IProduct[] = [];
  nameProduct: string = '';
  name: string = '';
  listaCategories: ICategorie[] = [];
  categories: number = 0;

  constructor(
    private productsService: ProductsService,
    public categorieService: CategoriesService
  ) {
    console.log();
  }

  ngOnInit(): void {
    this.categorieService
      .getCategories()
      .subscribe((categorias) => (this.listaCategories = categorias));
    this.productsService.getProducts().subscribe((products: IProduct[]) => {
      this.products = products;
      this.productsFilter = this.products;
    });
  }

  filterProducts(event: KeyboardEvent) {
    const key = (event.target as HTMLInputElement).value;
    this.productsFilter = this.products.filter(
      (product) => product.name == key.toLowerCase()
    );
  }

  orderDesc() {
    this.productsFilter.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
  }

  orderAsc() {
    this.productsFilter.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  }
}

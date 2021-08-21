import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductFilterPipe } from './shared/product-filter.pipe';
import { CarService } from '../cart/cart.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    ListComponent,
    HomeComponent,
    ProductComponent,
    ProductFilterPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class ProductsModule {}

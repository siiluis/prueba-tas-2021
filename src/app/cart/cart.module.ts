import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CartComponent],
})
export class CartModule {}

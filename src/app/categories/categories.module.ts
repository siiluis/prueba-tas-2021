import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from './services/categories.service';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class CategoriesModule {}

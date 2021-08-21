import { Component, OnInit } from '@angular/core';
import { ICategorie } from '../../models/ICategorie';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: ICategorie[] = [];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(list: IProduct[], filters: any) {
    filters.name = filters.name ? filters.name.toLowerCase() : '';
    filters.categories = parseInt(filters.categories);

    const keys = Object.keys(filters).filter((key) => filters[key]);
    return keys.length
      ? list.filter((product: IProduct) => {
          return keys.every((key) => {
            return product[key].includes(filters[key]);
          });
        })
      : list;
  }
}

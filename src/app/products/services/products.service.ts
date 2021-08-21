import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../models/IProduct'
import { NotificationsService } from 'src/app/notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL_CATEGORIES = `${environment.URL_DATA}/products`;
  constructor(private http: HttpClient,private notificacions:NotificationsService) { }

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.URL_CATEGORIES).pipe(
        catchError(error =>{
          this.notificacions.errorsFromServer(`${error.status}`)
          return []
        })
      )
  }
}

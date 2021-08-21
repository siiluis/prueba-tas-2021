import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICategorie } from '../models/ICategorie';
import { NotificationsService } from 'src/app/notifications/notifications.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private URL_CATEGORIES = `${environment.URL_DATA}/categories`;
  constructor(
    private http: HttpClient,
    private notificacions: NotificationsService
  ) {}

  getCategories(): Observable<ICategorie[]> {
    return this.http.get<ICategorie[]>(this.URL_CATEGORIES).pipe(
      catchError((error) => {
        this.notificacions.errorsFromServer(`${error.status}`);
        return [];
      })
    );
  }
}


import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {messageResponse} from './errors_http'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  errorsFromServer(status:string){
    Swal.fire({
      icon: 'error',
      title: `${status}`,
      text: messageResponse(status)
    })
  }
}

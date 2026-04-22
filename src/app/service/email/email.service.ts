import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { dataSendEmail } from '../../utils/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  #http = inject(HttpClient);
  #url = environment.apiUrl;

  sendEmail(data: dataSendEmail): Observable<{ message: string }> {
    return this.#http.post<{ message: string }>(`${this.#url}email/send`, data);
  }
}

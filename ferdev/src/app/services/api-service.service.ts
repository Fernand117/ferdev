import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url = "https://ferdevapi.herokuapp.com/api";

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(datos: any) {
    return this.http.post(`${this.url}/contacto/email`, datos);
  }
}

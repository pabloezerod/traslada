import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias() {
    try {

      return this.http.get("http://api2.traslada.com.ar/test/examen/noticias");

    } catch (error) {
      return error;
    }
  }
}

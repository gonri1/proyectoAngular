import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosapiService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> | null {
    return this.http.get('https://dummyjson.com/todos');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>('https://api.escuelajs.co/api/v1/products')
    .pipe(map((res: any) => {
        return res;
      })
    );
  }

  getCategory() {
    return this.http.get<any>('https://api.escuelajs.co/api/v1/categories')
    .pipe(map((res: any) => {
        return res;
      })
    );
  }
  
}

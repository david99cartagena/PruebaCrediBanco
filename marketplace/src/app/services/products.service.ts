import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private urlApi = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {
    //console.log('Servicio listo para usar!!!');
  }

  public getProducts(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  // revisar
  public buscarProduct(termino: string) {
    //let buscarProductArr: product[] = [];
    // termino = termino.toLowerCase();
    // for (let i = 0; i < this.product.length; i++) {
    //   let heroe = this.product[i];
    //   let nombre = product.nombre.toLowerCase();
    //   if (nombre.indexOf(termino) >= 0) {
    //     heroe.idx = i;
    //     heroesArr.push(heroe);
    //   }
    // }
    // return heroesArr;
  }
}

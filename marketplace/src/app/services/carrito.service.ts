import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class CarritotService {
  public carritoItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.carritoItemList.push(...product);
    this.productList.next(product);
  }

  addtoCarrito(product: any) {
    this.carritoItemList.push(product);
    this.productList.next(this.carritoItemList);
    this.getTotalPrice();
    console.log(this.carritoItemList);
  }
  
  getTotalPrice(): number {
    let grandTotal = 0;
    this.carritoItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCarritotItem(product: any) {
    this.carritoItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.carritoItemList.splice(index, 1);
      }
    });
    this.productList.next(this.carritoItemList);
  }
  
  removeAllCarrito() {
    this.carritoItemList = [];
    this.productList.next(this.carritoItemList);
  }

}

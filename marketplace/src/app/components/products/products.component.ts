import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CarritotService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  public productList: any;
  public filterCategory: any;
  searchKey:string ="";
  constructor(private api: ApiService,
    private carritotService: CarritotService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });

    this.carritotService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtoCarrito(item: any) {
    this.carritotService.addtoCarrito(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

}

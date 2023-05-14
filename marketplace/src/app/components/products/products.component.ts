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
  public categoryList: any;
  public filterCategory: any;
  searchKey:string ="";
  constructor(private api: ApiService,
    private carritotService: CarritotService) { }

  /**
   * The ngOnInit function initializes the component by subscribing to the getProduct API and setting
   * up a search key for the carritotService.
   */

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });
    
    this.api.getCategory().subscribe((res) => {
      this.categoryList = res;
      console.log(this.categoryList);
    });

    this.carritotService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtoCarrito(item: any) {
    this.carritotService.addtoCarrito(item);
  }
  
  /**
   * This function filters a list of products based on a given category.
   * @param {string} category - string - This is the category by which the products will be filtered.
   * It can be an empty string if no category is selected.
   */
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

}

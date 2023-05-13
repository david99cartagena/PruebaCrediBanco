import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  data: any[] = [];

  constructor(private ProductsService: ProductsService) {}
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.ProductsService.getProducts().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}

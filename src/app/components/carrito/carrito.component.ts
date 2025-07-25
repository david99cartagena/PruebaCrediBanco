import { Component, OnInit } from '@angular/core';
import { CarritotService } from 'src/app/services/carrito.service';
import { ngxCsv } from 'ngx-csv';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})

export class CarritoComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;

  constructor(private carritoService: CarritotService) {}

  ngOnInit(): void {
    this.carritoService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.carritoService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.carritoService.removeCarritotItem(item);
  }

  emptycart() {
    this.carritoService.removeAllCarrito();
  }

  /**
   * This function downloads a CSV file of product data with specified options.
   */
  fileDownload() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Descarga Product',
      useBom: true,
      headers: ['id', 'title', 'price', 'description', 'category', 'images'],
    };

    new ngxCsv(this.products, 'Descarga Product', options);
  }
  
}

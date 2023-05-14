import { Component, OnInit } from '@angular/core';
import { CarritotService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private carritoService : CarritotService) { }

  ngOnInit(): void {
    this.carritoService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.carritoService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.carritoService.removeCarritotItem(item);
  }

  emptycart(){
    this.carritoService.removeAllCarrito();
  }
  
}

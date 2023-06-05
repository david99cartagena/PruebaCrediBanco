import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  products: any[] = [];
  termino!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      // revisar
      //this.products = this.ProductsService.buscarProduct( params['termino'] );
      console.log(this.products);
    });
  }
}

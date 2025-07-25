import { Component,OnInit } from '@angular/core';
import { CarritotService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit{
  
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private carritotService : CarritotService) { }

  ngOnInit(): void {
    this.carritotService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.carritotService.search.next(this.searchTerm);
  }
  
}

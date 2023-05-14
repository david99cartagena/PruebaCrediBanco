import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
// import { ApiService } from './services/api.service';
// import { CarritotService } from './services/carrito.service';

// Componentes
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    CarritoComponent,
    ProductsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }

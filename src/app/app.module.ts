import { MaterialAngularModule } from './material-angular/material-angular.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemNovTiempoComponent } from './scrapping-tiempo/item-nov-tiempo/item-nov-tiempo.component';
import { HeaderScrappingTiempoComponent } from './scrapping-tiempo/header/header.component';
import { HomeComponent } from './home/home.component';
import { TiendaVirtualComponent } from './tienda-virtual/tienda-virtual.component';
import { ProductoComponent } from './tienda-virtual/producto/producto.component';
import { HeaderTiendaComponent } from './tienda-virtual/header/header.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ListaNovTiempoComponent } from './scrapping-tiempo/lista-nov-tiempo/lista-nov-tiempo.component';
import { MenuScrappingTiempo } from './scrapping-tiempo/menu-principal.component';
import { ListaProductosComponent } from './tienda-virtual/lista-productos/lista-productos.component';
import { ResumenCompraComponent } from './tienda-virtual/resumen-compra/resumen-compra.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemNovTiempoComponent,
    MenuScrappingTiempo,
    HeaderScrappingTiempoComponent,
    HomeComponent,
    TiendaVirtualComponent,
    ProductoComponent,
    HeaderTiendaComponent,
    ProgressSpinnerComponent,
    ListaNovTiempoComponent,
    ListaProductosComponent,
    ResumenCompraComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

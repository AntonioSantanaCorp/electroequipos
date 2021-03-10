import { ResumenCompraComponent } from './tienda-virtual/resumen-compra/resumen-compra.component';
import { TiendaVirtualComponent } from './tienda-virtual/tienda-virtual.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarScrappingTiempoResolver } from './services/listar-scrapping-tiempo.resolver';
import { ListaNovTiempoComponent } from './scrapping-tiempo/lista-nov-tiempo/lista-nov-tiempo.component';
import { MenuScrappingTiempo } from './scrapping-tiempo/menu-principal.component';
import { ListaProductosComponent } from './tienda-virtual/lista-productos/lista-productos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'scrapping',
    component: MenuScrappingTiempo,
    children: [
      {
        path: 'tiempo',
        component: ListaNovTiempoComponent,
        resolve: [ListarScrappingTiempoResolver],
      },
    ],
  },
  {
    path: 'tiendavirtual',
    component: TiendaVirtualComponent,
    children: [
      {
        path: 'listaproductos',
        component: ListaProductosComponent,
      },
      {
        path: 'resumencompra',
        component: ResumenCompraComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

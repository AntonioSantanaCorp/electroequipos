import { TiendaVirtualService } from './../../services/tienda-virtual.service';
import { ProductoTienda } from './../../shared/producto-tienda.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  listaProductos: ProductoTienda[] = [];

  constructor(private tiendaVirtualService: TiendaVirtualService) {}

  ngOnInit(): void {
    this.listaProductos = this.tiendaVirtualService.listaProductos;
  }
}

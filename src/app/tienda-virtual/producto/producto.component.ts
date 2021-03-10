import { TiendaVirtualService } from './../../services/tienda-virtual.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductoTienda } from 'src/app/shared/producto-tienda.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  @Input() producto: ProductoTienda;
  constructor(private tiendaVirtualService: TiendaVirtualService) {}

  ngOnInit(): void {}

  agregarCarrito() {
    this.tiendaVirtualService.agregarCarrito(this.producto);
  }
}

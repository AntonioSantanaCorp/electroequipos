import { TiendaVirtualService } from './../../services/tienda-virtual.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tienda',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderTiendaComponent implements OnInit {
  cantidadCompra = 0;

  constructor(private tiendaVirtualService: TiendaVirtualService) {}

  ngOnInit(): void {
    this.tiendaVirtualService.carritoCompras.subscribe(
      (s) => (this.cantidadCompra = s.length)
    );
  }
}

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductoTienda } from '../shared/producto-tienda.model';

@Injectable({
  providedIn: 'root',
})
export class TiendaVirtualService {
  carritoCompras = new BehaviorSubject<ProductoTienda[]>([]);

  listaProductos: ProductoTienda[] = [
    {
      id: 1,
      titulo: 'Laptop',
      descripcion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur.`,
      precio: 65000,
      imagen:
        'data:image/jpeg;base64,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',
      cantidad: 0,
    },
    {
      id: 2,
      titulo: 'Celular Galaxy',
      descripcion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur.`,
      precio: 30000,
      imagen:
        'https://cnet1.cbsistatic.com/img/42V9Nx_YYLJE-FvhwHCEz005HWw=/940x0/2020/04/07/0c2d1786-5db8-425d-8758-651e01f1466d/galaxy-a51.jpg',
      cantidad: 0,
    },
    {
      id: 3,
      titulo: 'Reloj inteligente iphone',
      descripcion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur.`,
      precio: 50000,
      imagen:
        'https://exitocol.vtexassets.com/arquivos/ids/2079155/reloj-inteligente-color-rosa-para-android-y-iphone.jpg?v=637272489628170000',
      cantidad: 0,
    },
  ];

  constructor() {}

  agregarCarrito(producto: ProductoTienda) {
    const listaCompras = [...this.carritoCompras.value];
    listaCompras.push({ ...producto, cantidad: 0 });
    this.carritoCompras.next([...listaCompras]);
  }

  eliminarCarrito(idEliminar: number) {
    const listaCompras = [...this.carritoCompras.value];
    const productoEliminar = listaCompras.filter((f) => f.id == idEliminar);

    if (productoEliminar.length) {
      //Elimina objetos
      productoEliminar.forEach((f) => {
        let index = listaCompras.indexOf(f);
        if (index >= 0) listaCompras.splice(index, 1);
      });
      this.carritoCompras.next([...listaCompras]);
    }
  }

  eliminarElemento(idEliminar: number) {
    const listaCompras = [...this.carritoCompras.value];
    const productoEliminar = listaCompras.findIndex(
      ({ id }) => id == idEliminar
    );

    //Elimina objetos
    if (productoEliminar >= 0) {
      listaCompras.splice(productoEliminar, 1);
      this.carritoCompras.next([...listaCompras]);
    }
  }

  realizarCompra() {
    this.carritoCompras.next([]);
  }
}

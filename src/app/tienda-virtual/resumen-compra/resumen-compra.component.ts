import { ProductoTienda } from 'src/app/shared/producto-tienda.model';
import { TiendaVirtualService } from './../../services/tienda-virtual.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.css'],
})
export class ResumenCompraComponent implements OnInit, OnDestroy {
  private resumenCompras: ProductoTienda[] = [];
  private subscripcion: Subscription = new Subscription();
  private total = 0;

  get carritoCompras() {
    return this.resumenCompras;
  }

  get totalCompra() {
    return this.total;
  }

  get columnas() {
    return ['img', 'titulo', 'precio', 'cantidad', 'quitar'];
  }

  get footer() {
    return ['img', 'quitar'];
  }

  constructor(
    private tiendaVirtualService: TiendaVirtualService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscripcion = this.tiendaVirtualService.carritoCompras.subscribe(
      (compras) => {
        const agrup = compras.slice().reduce(
          (acc: any, el) => ({
            ...acc,
            [el.id]: acc[el.id]
              ? { ...acc[el.id], cantidad: acc[el.id].cantidad + 1 }
              : { ...el, cantidad: el.cantidad + 1 },
          }),
          {}
        );

        const carrito: ProductoTienda[] = Object.values(agrup);
        this.resumenCompras = carrito;
        this.total = carrito.reduce(
          (acc, el) => acc + el.cantidad * el.precio,
          0
        );
      }
    );
  }

  eliminarCarrito(id: number) {
    this.tiendaVirtualService.eliminarCarrito(id);
  }

  agregarElemento(producto: ProductoTienda) {
    this.tiendaVirtualService.agregarCarrito(producto);
  }

  quitarElemento(id: number) {
    this.tiendaVirtualService.eliminarElemento(id);
  }

  realizarCompra() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.tiendaVirtualService.realizarCompra();
    });
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }
}

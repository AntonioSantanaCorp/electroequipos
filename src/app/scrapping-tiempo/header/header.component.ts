import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { ScrappingTiempoService } from '../../services/scrapping-tiempo.service';

@Component({
  selector: 'app-header-scrapping-tiempo',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderScrappingTiempoComponent implements OnInit {
  tipoUrl: string = '';
  cargandoScrappingTiempo = false;
  ordenarAsc = false;

  constructor(
    private tiempoService: ScrappingTiempoService
  ) {}

  ngOnInit(): void {
    this.tiempoService.cargandoLista.subscribe(
      (cargando) => (this.cargandoScrappingTiempo = cargando)
    );
  }

  listarNovedadesTiempo() {
    this.tiempoService.scrappingElTiempo();
  }

  ordenarListaTiempo() {
    this.ordenarAsc = !this.ordenarAsc;

    if (this.ordenarAsc) {
      this.tiempoService.listaNovedades.value.sort(
        (a, b) => a.fecha.getTime() - b.fecha.getTime()
      );
    } else {
      this.tiempoService.listaNovedades.value.sort(
        (a, b) => b.fecha.getTime() - a.fecha.getTime()
      );
    }
  }
}

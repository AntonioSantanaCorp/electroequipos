import { Component, OnInit } from '@angular/core';
import { ScrappingTiempoService } from 'src/app/services/scrapping-tiempo.service';
import { TiempoScrapping } from 'src/app/shared/tiempo-scrapping.model';

@Component({
  selector: 'app-lista-nov-tiempo',
  templateUrl: './lista-nov-tiempo.component.html',
  styleUrls: ['./lista-nov-tiempo.component.css'],
})
export class ListaNovTiempoComponent implements OnInit {
  listaNovedades: TiempoScrapping[] = [];
  cargandoLista = false;

  constructor(private tiempoService: ScrappingTiempoService) {}

  ngOnInit(): void {
    this.tiempoService.listaNovedades.subscribe((lista) => {
      this.listaNovedades = lista;
    });
    this.tiempoService.cargandoLista.subscribe((cargando) => {
      this.cargandoLista = cargando;
      console.log(this.cargandoLista)
    });
  }
}

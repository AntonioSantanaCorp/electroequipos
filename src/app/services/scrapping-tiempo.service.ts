import { TiempoScrapping } from './../shared/tiempo-scrapping.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrappingTiempoService {
  listaNovedades = new BehaviorSubject<TiempoScrapping[]>([]);
  cargandoLista = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  scrappingElTiempo() {
    this.cargandoLista.next(true);
    this.http
      .get<TiempoScrapping[]>('https://electroequiposback.herokuapp.com/api/scrapping/tiempo')
      .pipe(
        take(1),
        map((m) => m.map((item) => ({ ...item, fecha: new Date(item.fecha) })))
      )
      .subscribe((scrapping) => {
        this.listaNovedades.next(scrapping);
        this.cargandoLista.next(false);
      });
  }
}

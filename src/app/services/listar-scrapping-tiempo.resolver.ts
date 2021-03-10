import { ScrappingTiempoService } from './scrapping-tiempo.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListarScrappingTiempoResolver implements Resolve<void> {
  constructor(private scrappingTiempoService: ScrappingTiempoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.scrappingTiempoService.scrappingElTiempo();
  }
}

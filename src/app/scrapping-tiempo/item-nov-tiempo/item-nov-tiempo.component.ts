import { Component, Input, OnInit } from '@angular/core';
import { TiempoScrapping } from 'src/app/shared/tiempo-scrapping.model';

@Component({
  selector: 'app-item-nov-tiempo',
  templateUrl: './item-nov-tiempo.component.html',
  styleUrls: ['./item-nov-tiempo.component.css'],
})
export class ItemNovTiempoComponent implements OnInit {
  @Input() novedad: TiempoScrapping;

  constructor() {}

  ngOnInit(): void {}
}

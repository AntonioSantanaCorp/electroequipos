import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  template: '<mat-spinner></mat-spinner>',
})
export class ProgressSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

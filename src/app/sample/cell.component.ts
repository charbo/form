import { Component, Input } from '@angular/core';
import { Cell } from '../model/cell';


@Component({
  selector: 'cell-component',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent {

  @Input() cell: Cell;
  @Input() size: number;

  constructor() { }

    getWidth() {
      switch (this.size) {
        case 0:
        case 1:
          return 'wcent';
        case 2:
          return 'wfifty';
        case 3:
          return 'wtier';
      }
    }

    getClass() {
      return 'cell no-animate ' + this.getWidth();
    }


}

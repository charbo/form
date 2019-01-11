import { Component, Input, SimpleChanges } from '@angular/core';
import { Cell } from '../../model/cell';

import { PropertiesService } from '../../service/properties.service';


@Component({
  selector: 'cell-component',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent {

  private propertiesService: PropertiesService;

  @Input() cell: Cell;
  @Input() size: number;

  constructor(propertiesService: PropertiesService) {
    this.propertiesService = propertiesService;
  }

    getWidth(): string {
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

    getClass(): string {
      return 'cell no-animate ' + this.getWidth();
    }

    selectCell(): void {
      this.propertiesService.setSelectedCell(this.cell);
    }

}

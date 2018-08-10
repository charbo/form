import { Component, Input } from '@angular/core';
import { Cell } from '../model/cell';


@Component({
  selector: 'cell-component',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent {

  @Input() cell: Cell;

  constructor() { }

}

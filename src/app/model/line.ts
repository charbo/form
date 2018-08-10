import { Element } from './element';
import { Draggable } from './draggable';
import { Cell } from './cell';

export class Line {

    index: number;
    cells: Cell[] = [];

    addCell(): void {
        const cell = new Cell();
        const id = 'cell-' + this.index + '-' + this.cells.length;
        cell.id = id;
        this.cells.push(cell);
    }

    addElementToCell(draggable: Draggable, key: string): void {
      const id = key.split('-');
      const cell =  this.cells[+id[2]];
      cell.setElement(draggable);
    }

    removeElementFromCell(key: string): void {
      const id = key.split('-');
      const cell =  this.cells[+id[2]];
      cell.clear();
    }

}

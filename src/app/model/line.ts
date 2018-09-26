import { Cell } from './cell';

export class Line {

    index: number;
    cells: Cell[] = new Array();

    addCell(): void {
        const cell = new Cell();
        const id = 'cell-' + this.index + '-' + this.cells.length;
        cell.id = id;
        this.cells.push(cell);
    }

    getHtml(): string {
      return '<div>' + this.cells.map(c => c.getHtml()).join('') + '</div>';
    }

}

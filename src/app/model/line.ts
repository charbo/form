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
      let result = '<div>';
      this.cells.forEach(c => result += c.getHtml());
      return result + '</div>';
    }

}

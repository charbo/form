import { Line } from './line';
import { Draggable } from './draggable';

export class Form {
    label: string;
    lines: Line[] = new Array();

    addLine(): void {
        const line = new Line();
        line.index = this.lines.length;
        this.lines[line.index] = line;
    }

    addCell(lineIndex: number): void {
      if (this.lines[lineIndex]) {
        this.lines[lineIndex].addCell();
      }
    }

    addElementToCell(draggable: Draggable, key: string): void {
      const id = key.split('-');
      const line =  this.lines[+id[1]];
      line.addElementToCell(draggable, key);
    }

    removeElementFromCell(key: string): void {
      const id = key.split('-');
      const line =  this.lines[+id[1]];
      line.removeElementFromCell(key);
    }

    isFree(line: number, cell: number): boolean {
      if (this.lines[line] && this.lines[line].cells[cell]) {
       return this.lines[line].cells[cell].isFree();
      }
    }
}

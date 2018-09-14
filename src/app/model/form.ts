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
      if (this.lines[lineIndex] && this.lines[lineIndex].cells.length < 3) {
        this.lines[lineIndex].addCell();
      }
    }


    isFree(line: number, cell: number): boolean {
      if (this.lines[line] && this.lines[line].cells[cell]) {
       return this.lines[line].cells[cell].isFree();
      }
    }
}

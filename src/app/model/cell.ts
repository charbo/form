import { Draggable } from './draggable';

export class Cell {
    id: string;
    draggables: Draggable[] = new Array();

    getHtml(): string {
      return this.draggables[0].getHtml();
    }
}

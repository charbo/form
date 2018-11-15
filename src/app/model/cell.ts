import { Draggable } from './draggable';

export class Cell {
    id: string;
    //Hummm array à cause de dragula?
    draggables: Draggable[] = new Array();

    getHtml(): string {
      return this.draggables[0].getHtml();
    }

    getDraggable(): Draggable {
      return this.draggables[0];
    }
}

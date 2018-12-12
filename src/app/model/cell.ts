import { Draggable } from './draggable';

export class Cell {
    id: string;
    //Hummm array à cause de dragula?
    draggables: Draggable[] = new Array();

    getDraggable(): Draggable {
      return this.draggables[0];
    }
}

import { Draggable } from './draggable';

export class Cell {
    id: string;
    draggable: Draggable;

    setElement(draggable: Draggable): void {
        this.draggable = draggable;
    }

    clear(): void {
      this.draggable = undefined;
    }

    isFree(): boolean {
      return this.draggable === undefined;
    }

}

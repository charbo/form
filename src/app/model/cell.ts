import { Element } from './element';
import { Draggable } from './draggable';

export class Cell {
    id: string;
    element: Element;

    setElement(draggable: Draggable): void {
        this.element = new Element(draggable);
    }

    clear(): void {
      this.element = undefined;
    }

    isFree(): boolean {
      return this.element === undefined;
    }

}

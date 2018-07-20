import { Element } from "./element";
import { Draggable } from "./draggable";

export class Line {
    index: number;
    elements: Element[] = [];

    insertElement(draggable: Draggable): void {
        this.elements.push(new Element(draggable));
    }

}
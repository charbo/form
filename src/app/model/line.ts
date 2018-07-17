import { Element } from "./element";
import { Dragable } from "./dragable";

export class Line {
    index: number;
    elements: Element[] = [];

    insertElement(dragable: Dragable): void {
        this.elements.push(new Element(dragable));
    }

}
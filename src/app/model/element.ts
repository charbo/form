import { Dragable } from "./dragable";

export class Element {
    index: number;
    parent: Dragable;

    public constructor(parent: Dragable) { 
        this.parent = parent; 
    }

}
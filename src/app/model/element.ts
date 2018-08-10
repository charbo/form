import { Draggable } from './draggable';

export class Element {
    index: number;
    parent: Draggable;

    public constructor(parent: Draggable) {
        this.parent = parent;
    }

}

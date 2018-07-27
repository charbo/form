import { Line } from './line';

export class Form {
    label: string;
    lines: Line[] = [];

    addLine(): void {
        const line = new Line();
        line.index = this.lines.length;
        this.lines.push(line);
    }
}

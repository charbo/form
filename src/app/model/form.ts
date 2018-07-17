import { Line } from "./Line";

export class Form {
    label: string;
    lines: Line[] = [];

    addLine(line: Line): void {
        this.lines.push(line);
    }
}
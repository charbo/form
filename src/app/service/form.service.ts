import { Injectable } from '@angular/core';
import { Form } from '../model/form';


@Injectable({ providedIn: 'root' })
export class FormService {

  private form: Form = new Form();

  constructor() { }

  getForm(): Form {
    return this.form;
  }

  addLine(): void {
    this.form.addLine();
  }

  addCell(selectedLine: number): void {
    this.form.addCell(selectedLine);
  }

  getAvailableParents(): string[] {
    const cells = this.form.lines.reduce((acc, line) => acc.concat(line.cells), []);
    // tslint:disable-next-line:max-line-length
    const res = cells.reduce((acc, cell) => acc.concat(cell.draggables[0]), []).filter(drag => drag !== undefined).reduce((acc, drag) => acc.concat(drag.name), []);
    return res;
  }
}

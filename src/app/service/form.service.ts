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

  isFree(targetId: string): boolean {
    const ids = targetId.split('-');
    return this.form.isFree(+ids[1], +ids[2]);
  }

}

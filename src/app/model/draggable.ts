import { Propertie } from './propertie';

export class Draggable {
  type: string;
  name: string;
  properties: Propertie[] = new Array();
  template: string;
  html: string;


  clone(): Draggable {
    const clone = new Draggable();
    clone.type = this.type;
    clone.name = this.name;

    clone.template = this.template;
    clone.html = this.html;
    clone.properties = new Array();

    for (let _i = 0; _i < this.properties.length; _i++) {
      const prop = this.properties[_i];

      const np = new Propertie();
      np.key = prop.key;
      np.value = prop.value;

      clone.properties.push(np);
  }

    return clone;
  }


  getHtml(): string {
    this.properties.forEach(p => this.html = this.html.replace('\${' + p.key + '}', p.value));
    return this.html;
  }
}

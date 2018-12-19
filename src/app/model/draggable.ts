import { Propertie } from './propertie';
import { Values } from './values';

export class Draggable {
  type: string;
  name: string;
  dataset: string;
  filters: Propertie[] = new Array();
  values: Values[] = new Array();
  attach = false;


  clone(): Draggable {
    const clone = new Draggable();
    clone.type = this.type;
    clone.name = this.name + '_' + Math.floor(Math.random() * 1000);
    clone.dataset = this.dataset;
    clone.filters = new Array();
    clone.attach = true;

    for (let _i = 0; _i < this.filters.length; _i++) {
      const prop = this.filters[_i];
      const np = new Propertie();
      np.key = prop.key;
      np.value = prop.value;
      clone.filters.push(np);
    }

    clone.values = new Array();

    for (let _i = 0; _i < this.values.length; _i++) {
      const value = this.values[_i];
      const nv = new Values();
      nv.key = value.key;
      for (let _j = 0; _j < value.values.length; _j++) {
        nv.values.push(value.values[_j]);
      }
      clone.values.push(nv);
    }

    return clone;
  }

}

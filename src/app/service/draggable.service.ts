import { Injectable } from '@angular/core';
import { Draggable } from '../model/draggable';


@Injectable({ providedIn: 'root' })
export class DraggableService {

  private draggables: Draggable[] = new Array();

  constructor() { }

  getDraggables():  Draggable[] {
      // tslint:disable-next-line:max-line-length
    const d1 = '{"type":"input","name":"input","template":"<div [attr.data-id]=\\"draggable.name\\">{{draggable.properties[0].value}}  <input type=\'text\' placeholder=\\"{{draggable.properties[1].value}}\\"/> </div>","html":"<div>${label}  <input type=\'text\' placeholder=\'${placeholder}\' /> </div>","properties":[{"key" : "label", "value" : "label"}, {"key" : "placeholder", "value" : "placeholder"}]}';
    // tslint:disable-next-line:max-line-length
    const d2 = '{"type":"button","name":"button","template":"<div [attr.data-id]=\\"draggable.name\\"><button type=\'button\'>{{draggable.properties[0].value}}</button></div>","html":"<div><button type=\'button\'>${label}</button></div>","properties":[{"key" : "label", "value" : "label"}]}';

    // tslint:disable-next-line:max-line-length
    const d3 = '{"type":"list","name":"list","template":"<div [attr.data-id]=\\"draggable.name\\"><select><option *ngFor=\\"let v of draggable.values[0].values\\" [value]=\\"v\\">{{v}}</option></select></div>", "html":"<div>TODO</div>","values":  [{"key" : "options", "values" : ["name1", "name2"]}]}';


    // tslint:disable-next-line:max-line-length
    const d4 = '{"type":"chart","name":"chart","visibility":"hidden","template":"<chtml-component [id]=\\"draggable.name\\" [url]=\\"draggable.properties[0].value\\" [attr.data-id]=\\"draggable.name\\"></chtml-component>", "html":"<div>TODO</div>","properties":[{"key" : "url", "value" : "url"}]}';


    const drag4: Draggable = Object.assign(new Draggable(), JSON.parse(d4));
    this.draggables.push(drag4);
    return this.draggables;
  }

  addChart(draggable: Draggable): void {
    this.draggables.push(draggable);
  }


}






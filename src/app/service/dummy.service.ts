import { Injectable } from '@angular/core';
import { Draggable } from '../model/draggable';
import { Request } from '../model/request';


@Injectable({ providedIn: 'root' })
export class DummyService {

  requests: Request[];

  constructor() { }

  getDraggables ():  Draggable[] {
      // tslint:disable-next-line:max-line-length
    const d1 = '{"type":"input","name":"input","template":"<div [attr.data-id]=\\"draggable.name\\">{{draggable.properties[0].value}}  <input type=\'text\' placeholder=\\"{{draggable.properties[1].value}}\\"/> </div>","html":"<div>${label}  <input type=\'text\' placeholder=\'${placeholder}\' /> </div>","properties":[{"key" : "label", "value" : "label"}, {"key" : "placeholder", "value" : "placeholder"}]}';
    // tslint:disable-next-line:max-line-length
    const d2 = '{"type":"button","name":"button","template":"<div [attr.data-id]=\\"draggable.name\\"><button type=\'button\'>{{draggable.properties[0].value}}</button></div>","html":"<div><button type=\'button\'>${label}</button></div>","properties":[{"key" : "label", "value" : "label"}]}';

    // tslint:disable-next-line:max-line-length
    const d3 = '{"type":"list","name":"list","template":"<div [attr.data-id]=\\"draggable.name\\"><select><option *ngFor=\\"let v of draggable.values[0].values\\" [value]=\\"v\\">{{v}}</option></select></div>", "html":"<div>TODO</div>","values":  [{"key" : "options", "values" : ["name1", "name2"]}]}';


    // tslint:disable-next-line:max-line-length
    const d4 = '{"type":"chart","name":"chart","visibility":"hidden","template":"<chtml-component [id]=\\"draggable.name\\" [url]=\\"draggable.properties[0].value\\" [attr.data-id]=\\"draggable.name\\"></chtml-component>", "html":"<div>TODO</div>","properties":[{"key" : "url", "value" : "url"}]}';


    const drag4: Draggable = Object.assign(new Draggable(), JSON.parse(d4));
    return Array.of(drag4);
  }

  getRequests(): Request[] {
    const r1 = '{"name": "rental"}';
    const r2 = '{"name": "category", "parameters":[{"key" : "month", "value" : "August"}]}';
    const r3 = '{"name": "payment"}';
    const r4 = '{"name": "paymentdays", "parameters":[{"key" : "month", "value" : "August"}]}';

    const rqt1: Request = Object.assign(new Request(), JSON.parse(r1));
    const rqt2: Request = Object.assign(new Request(), JSON.parse(r2));
    const rqt3: Request = Object.assign(new Request(), JSON.parse(r3));
    const rqt4: Request = Object.assign(new Request(), JSON.parse(r4));
    this.requests = Array.of(rqt1, rqt2, rqt3, rqt4);
    return this.requests;
  }

  getRequest(name: string): Request {
    return this.requests.find(r => r.name === name);
  }


}






import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Draggable } from '../model/draggable';


@Injectable({ providedIn: 'root' })
export class DummyService {



  constructor() { }

  getDraggables ():  Draggable[] {
    // tslint:disable-next-line:max-line-length
    const datas = '[{"type":"input","name":"input","template":"<div [attr.data-id]=\"draggable.name\">{{draggable.properties.label}}  <input type=\'text\'/> </div>","html":"<div>:label  <input type=\'text\'/> </div>","properties":{"label":"label"}},{"type":"button","name":"button","template":"<div><button type=\"button\">{{draggable.properties.label}}</button></div>","html":"<div><button type=\"button\">:label</button></div>","properties":{"label":"label"}}]';

    // tslint:disable-next-line:max-line-length
    const d1 = '{"type":"input","name":"input","template":"<div [attr.data-id]=\\"draggable.name\\">{{draggable.properties.label}}  <input type=\'text\'/> </div>","html":"<div>:label  <input type=\'text\'/> </div>","properties":{"label":"label"}}';
    // tslint:disable-next-line:max-line-length
    const d2 = '{"type":"button","name":"button","template":"<div [attr.data-id]=\\"draggable.name\\"><button type=\'button\'>{{draggable.properties.label}}</button></div>","html":"<div><button type=\'button\'>:label</button></div>","properties":{"label":"label"}}';
    // return JSON.parse(JSON.stringify(datas));
    const drag1: Draggable = Object.assign(new Draggable(), JSON.parse(d1));
    const drag2: Draggable = Object.assign(new Draggable(), JSON.parse(d2));
    return Array.of(drag1, drag2);
  }


}






import { Form } from '../model/form';
import { Line } from '../model/Line';

import { Injectable } from '@angular/core';
import { Dragable } from '../model/dragable';
import { Element } from '../model/element';
 
@Injectable({
  providedIn: 'root',
})


export class MockServiceDragable {


    getFrom(): Form {
        let form = new Form();
        let line = new Line();

        line.elements.push(new Element(new Dragable('input', 'toto', 'input-text')));
        line.elements.push(new Element(new Dragable('textarea', 'titi', 'texteara')));

        line.insertElement(new Dragable('textarea', 'tata', 'texteara'));
        
        form.addLine(line);
        return form;
    }
}
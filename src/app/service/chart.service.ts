import { Injectable } from '@angular/core';
import { Draggable } from '../model/draggable';
import { Observable, Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ChartService {
  private subject = new Subject<Draggable>();

  constructor() { }

  addNewChart(): void {
    this.subject.next(new Draggable());
  }

  getDraggable(): Observable<Draggable> {
    return this.subject.asObservable();
  }

}

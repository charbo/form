import { Injectable } from '@angular/core';
import { Cell } from '../model/cell';
import { Observable, Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PropertiesService {
  private subject = new Subject<Cell>();

  constructor() { }

  setSelectedCell(cell: Cell): void {
    this.subject.next(cell);
  }

  getCell(): Observable<Cell> {
    return this.subject.asObservable();
  }

}

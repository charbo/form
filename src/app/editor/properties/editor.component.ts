import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertiesService } from '../../service/properties.service';
import { Cell } from '../../model/cell';
import { Values } from '../../model/values';


@Component({
  selector: 'editor-component',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnDestroy {
  objectKeys = Object.keys;
  private subscription: Subscription;
  cell: Cell;


  constructor(private propertiesService: PropertiesService) {
    this.subscription = this.propertiesService.getCell().subscribe(cell => {this.cell = cell; console.log('-- ' + this.cell); });
  }

  trackByFn(index: number): number {
    return index;
  }
  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  addValue(): void {
    // tslint:disable-next-line:no-shadowed-variable
    const value = this.cell.getDraggable().values.filter(value => value.key === 'options');
    value[0].values.push('new value');
  }

}


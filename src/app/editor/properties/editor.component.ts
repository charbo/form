import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertiesService } from '../../service/properties.service';
import { Cell } from '../../model/cell';


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


  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  update(i: number, value: string): void {
    console.log(value);
  }

}


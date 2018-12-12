import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartService } from '../../service/chart.service';
import { Draggable } from '../../model/draggable';
import { DraggableService } from '../../service/draggable.service';


@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnDestroy {
  objectKeys = Object.keys;
  private subscription: Subscription;
  draggable: Draggable;


  constructor(private chartService: ChartService, private draggableService: DraggableService) {
    this.subscription = this.chartService.getDraggable().subscribe(d => {this.draggable = d; });
    this.draggableService = draggableService;
  }


  valider(): void {
    this.draggableService.addChart(this.draggable);
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }



}


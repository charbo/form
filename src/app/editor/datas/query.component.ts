import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SourceService } from '../../service/source.service';
import { Query } from '../../model/datas/query';


@Component({
  selector: 'query-component',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})

export class QueryComponent  {
  submitted = false;
  query = new Query();

  constructor(private sourceService: SourceService) {
    this.sourceService = sourceService;
  }

}


import { SourcesService } from './../../service/sources.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Query } from '../../model/datas/query';
import { QueryService } from '../../ws/query.ws';
import { Parameter } from '../../model/datas/parameter';
import { ResourcesService } from '../../service/resources.service';


@Component({
  selector: 'query-component',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})

export class QueryComponent implements OnInit {
  submitted = false;
  query = new Query();
  sources = new Array();

  constructor(private sourcesService: SourcesService, private queryService: QueryService, private resourceService: ResourcesService) {
  }


  ngOnInit(): void {
    this.sources = this.sourcesService.getSource().map(s => s.name);
  }


  addSerie(): void {
    const num = this.query.parameters.length + 1;
    const param = new Parameter();
    param.key = 'param' + num;
    param.value = 'value';
    this.query.parameters.push(param);
  }

  onSubmit() {
    this.submitted = true;
    this.queryService.saveQuery(this.query).subscribe(() =>  this.resourceService.addQuery(this.query));
  }

}


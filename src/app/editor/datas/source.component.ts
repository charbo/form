import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SourceService } from '../../ws/source.service';
import { Source } from '../../model/datas/source';


@Component({
  selector: 'source-component',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})

export class SourceComponent  {
  submitted = false;
  source = new Source();

  constructor(private sourceService: SourceService) {
    this.sourceService = sourceService;
  }

  onSubmit() {
    this.submitted = true;
    this.sourceService.saveSource(this.source).subscribe(source => this.source = source);
  }

}


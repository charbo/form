import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResourcesService } from './resources.service';
import { Source } from '../model/datas/source';



@Injectable({ providedIn: 'root' })
export class SourcesService implements OnDestroy {
  private subscription: Subscription;
  sources: Source[];

  constructor(private resourceService: ResourcesService) {
    // tslint:disable-next-line:max-line-length
    this.subscription = this.resourceService.getSources().subscribe(sources => {
      console.log('++ ***** zob' );
      this.sources = sources;
    });

  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  getSource(): Source[] {
    return this.sources;
  }



}






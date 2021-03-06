import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthService } from '@demo/auth-lib';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  //styleUrls: ['./flights-search.component.css'],
})
export class FlightsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private authService: AuthService,
    private store: Store,
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }


  userName = this.authService.userName;

  search() {
    alert('Not implemented for this demo!');
    console.log("@@@@", this.store);
  }

  terms() {
    // const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

    // const factory = this.cfr.resolveComponentFactory(comp);
    // this.viewContainer.createComponent(factory, null, this.injector);
  }


}

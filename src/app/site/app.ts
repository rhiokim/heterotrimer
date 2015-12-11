import {Component, View} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, Router} from 'angular2/router';

import {DashboardComponent} from './dashboard';
// import {BreadcrumbsComponent} from './global/breadcrumbs'
// import {PageTitleComponent} from './global/page-title'
// import {ZoneSelectorComponent} from './global/zone-selector'
// import {PageMetadata} from '../models/page-metadata'
// import {About} from './components/about/about';

declare var System:any;

@Component(
{
  selector: 'app',
  templateUrl: './app/site/app.html',
  directives: [ ROUTER_DIRECTIVES ]
})

@RouteConfig([
  new Route({ path: '/dashboard/...', component: DashboardComponent, name: 'Dashboard' })
])

export class AppComponent {
  constructor(public router: Router, public location: Location) {
  }
}

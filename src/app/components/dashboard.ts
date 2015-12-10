import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Route, Location} from 'angular2/router';

import {OverviewComponent} from '../components/overview/overview';

@Component({
  selector: 'dashboard',
  templateUrl: './app/components/dashboard.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  new Route({ path: '/overview', component: OverviewComponent, name: 'Overview' })
])

export class DashboardComponent {
  // TODO: add collapse logic

  constructor(public location: Location) {
  }

  getLinkStyle(path) {
    return this.location.path().indexOf(path) > -1;
  }
}



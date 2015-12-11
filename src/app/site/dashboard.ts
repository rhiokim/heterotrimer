import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Route, Location} from 'angular2/router';

import {OverviewComponent} from '../site/overview/overview';
import {AllComponents} from '../site/all/all';
import {IronComponents} from '../site/iron/iron';
import {PaperComponents} from '../site/paper/paper';

@Component({
  selector: 'dashboard',
  templateUrl: './app/site/dashboard.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  new Route({ path: '/overview', component: OverviewComponent, name: 'Overview' }),
  new Route({ path: '/all', component: AllComponents, name: 'All' }),
  new Route({ path: '/iron', component: IronComponents, name: 'Iron' }),
  new Route({ path: '/paper', component: PaperComponents, name: 'Paper' })
])

export class DashboardComponent {
  // TODO: add collapse logic

  constructor(public location: Location) {
  }

  getLinkStyle(path) {
      return this.location.path().indexOf(path) > -1;
  }
}



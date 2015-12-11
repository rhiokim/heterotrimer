import {Component, bootstrap, CORE_DIRECTIVES, bind, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'

import {AppComponent} from './site/app';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }), //use has url PathLocationStrategy
  HTTP_PROVIDERS
])

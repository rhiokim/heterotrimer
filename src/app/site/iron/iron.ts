import {Component} from 'angular2/angular2';

import {Alert} from '../../components/alert/alert';

@Component({
  selector: 'iron',
  templateUrl: './app/site/iron/iron.html',
  directives: [Alert]
})

export class IronComponents {
  constructor(){
  }
}

/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {PerformerService} from './performers/performer.service';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  providers: [
    PerformerService
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public performerService: PerformerService) {
  }

}

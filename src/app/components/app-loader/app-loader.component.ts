import {
  Component,
  Input
} from '@angular/core';
@Component({
  selector: 'app-loader',
  styleUrls: [
    './app-loader.component.css'
  ],
  templateUrl: './app-loader.component.html'
})
export class ApploaderComponent {

  @Input() public loading: boolean = false;
}

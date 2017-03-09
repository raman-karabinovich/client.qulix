import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPerformer, Performer} from '../../shared/app.model';
@Component({
  selector: 'performer-add',
  styles: [''],
  templateUrl: './performer-add.component.html'
})
export class PerformerAddComponent {
  @Output() public create = new EventEmitter();
  public model: IPerformer = new Performer();
  public staticModal;

  constructor(public route: ActivatedRoute) {
  }

  public onCreate() {
    this.create.emit(this.model);
  }
}

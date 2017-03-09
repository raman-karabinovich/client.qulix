import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'performer-delete',
  styles: [''],
  templateUrl: './performer-delete.component.html'
})
export class PerformerDeleteComponent {
  @Output() public delete = new EventEmitter();

  constructor(public route: ActivatedRoute) {
  }

  public onDelete() {
    this.delete.emit();
  }
}

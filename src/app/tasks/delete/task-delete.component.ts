import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'task-delete',
  styles: [''],
  templateUrl: 'task-delete.component.html'
})
export class TaskDeleteComponent {
  @Output() public delete = new EventEmitter();

  constructor(public route: ActivatedRoute) {
  }

  public onDelete() {
    this.delete.emit();
  }
}

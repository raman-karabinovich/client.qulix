import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPerformer, Performer} from '../../shared/app.model';
@Component({
  selector: 'performer-edit',
  styles: [''],
  templateUrl: './performer-edit.component.html'
})
export class PerformerEditComponent {
  @Output() public edit = new EventEmitter();
  @Input() public model: IPerformer;
  public _model: IPerformer;

  constructor(public route: ActivatedRoute) {
    this._model = new Performer();
  }

  public startEdit() {
    this._model.second_name = this.model.second_name;
    this._model.first_name = this.model.first_name;
    this._model.middle_name = this.model.middle_name;
    console.log(this._model);
  }

  public cancelEdit() {
    console.log(this._model, this.model);
    this.model.second_name = this._model.second_name;
    this.model.first_name = this._model.first_name;
    this.model.middle_name = this._model.middle_name;
  }

  public onEdit() {
    this.edit.emit(this.model);
  }
}

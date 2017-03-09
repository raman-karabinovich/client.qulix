import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ITask, Task, IPerformer, Performer} from "../../shared/app.model";
import {DatePipe} from "@angular/common";
import {TaskService} from "../task.service";
import {PerformerService} from "../../performers/performer.service";
@Component({
  selector: 'task-edit',
  styleUrls: [
    './task-edit.component.css'
  ],
  templateUrl: 'task-edit.component.html'
})
export class TaskEditComponent {
  @Output() public edit = new EventEmitter();
  @Input() public model: ITask;
  @Input() public performersData: Array<IPerformer>;
  public _model: ITask;
  public isStartDayVisible: boolean;
  public isEndDayVisible: boolean;
  public statusArray: any;

  constructor(public route: ActivatedRoute, private datePipe: DatePipe, public taskService: TaskService, public performerService: PerformerService) {
    this._model = new Task();
    this.isStartDayVisible = false;
    this.isEndDayVisible = false;
    this.statusArray = this.taskService.getStatuses();
    this.performersData = new Array<Performer>();
  }

  public startEdit() {
    this.model.end_date = new Date(this.datePipe.transform(this.model.end_date, 'yyyy-MM-dd'));
    this._model.name = this.model.name;
    this._model.workload = this.model.workload;
    this._model.start_date = this.model.start_date;
    this._model.end_date = this.model.end_date;
    this._model.status = this.model.status;
    this._model.performer = this.model.performer;
  }

  public cancelEdit() {
    this.model.name = this._model.name;
    this.model.workload = this._model.workload;
    this.model.start_date = this._model.start_date;
    this.model.end_date = this._model.end_date;
    this.model.status = this._model.status;
    this.model.performer = this._model.performer;
  }

  public onEdit() {
    this.model.start_date = new Date(this.datePipe.transform(this.model.start_date, 'yyyy-MM-dd'));
    this.model.end_date = new Date(this.datePipe.transform(this.model.end_date, 'yyyy-MM-dd'));
    console.log(this.model.start_date);
    this.edit.emit(this.model);
  }
}

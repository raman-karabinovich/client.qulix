import {
  Component,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ITask, Task, IPerformer, Performer} from '../../shared/app.model';
import {TaskService} from '../task.service';
import {PerformerService} from '../../performers/performer.service';
@Component({
  selector: 'task-add',
  styleUrls: [
    './task-add.component.css'
  ],
  templateUrl: 'task-add.component.html'
})
export class TaskAddComponent implements OnInit {
  @Output() public create = new EventEmitter();
  public model: ITask = new Task();
  public isStartDayVisible: boolean;
  public isEndDayVisible: boolean;
  public start_day: string;
  public end_day: string;
  public performersData: Array<IPerformer>;
  public statusArray: any;
  public mask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  constructor(public route: ActivatedRoute,
              private datePipe: DatePipe,
              public taskService: TaskService,
              public performerService: PerformerService) {
    this.isStartDayVisible = false;
    this.isEndDayVisible = false;
    this.statusArray = this.taskService.getStatuses();
    this.performersData = new Array<Performer>();
  }

  ngOnInit() {
    this.start_day = (new Date()).toISOString().slice(0, 10);
    this.end_day = (new Date()).toISOString().slice(0, 10);
    this.performerService.getPerformers(1000, 1)
      .subscribe((data) => {
          this.performersData = data.items;
        },
        (error) => {
          alert(error);
        });
  }
  public onShowModal(){
    console.log('show');
    this.start_day = (new Date()).toISOString().slice(0, 10);
    this.end_day = (new Date()).toISOString().slice(0, 10);
  }
  public onCreate() {
    this.model.start_date = new Date(this.datePipe.transform(this.start_day, 'yyyy-MM-dd'));
    this.model.end_date = new Date(this.datePipe.transform(this.end_day, 'yyyy-MM-dd'));
    this.create.emit(this.model);
  }
}

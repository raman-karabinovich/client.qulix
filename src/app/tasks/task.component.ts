import {
  Component,
  OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from './task.service';
import {PerformerService} from '../performers/performer.service';
import {ITask, Task, IPerformer, IStatus, Status, Performer} from '../shared/app.model';
@Component({
  selector: 'tasks-list',
  styles: [''],
  providers: [
    TaskService
  ],
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

  public data: Array<ITask>;
  public performersData: Array<IPerformer>;
  public loading: boolean = false;
  public statusArray: Array<IStatus>;

  public pageCount: number;
  public totalItems: number;
  public perPage: number = 2;
  public currentPage: number = 1;

  constructor(public route: ActivatedRoute,
              public taskService: TaskService,
              public performerService: PerformerService) {
    this.data = new Array<Task>();
    this.performersData = new Array<Performer>();
    this.statusArray = this.taskService.getStatuses();
  }
  /**
   * Navigation method of pagination component
   * @param event
   */
  public onPageChange(event: any): void {
    this.loading = true;
    this.currentPage = event.page;
    this.taskService.getTasks(this.perPage, this.currentPage)
      .subscribe((data: any) => {
          this.data = data.items;
          this.pageCount = data._meta.pageCount;
          this.totalItems = data._meta.totalCount;
          this.loading = false;
        },
        (error) => {
          alert(error);
          this.loading = false;
        });
  }

  /**
   * Gets status names.
   * @param statusId
   * @returns {string}
   */
  public getStatus(statusId: number): string {
    return this.statusArray.find((statusItem) => {
      return statusItem.id == statusId;
    }).name;
  }

  /**
   * Gets performer name.
   * @param performerId
   * @returns {string}
   */
  public getPerformer(performerId: number): string {
    var performer = this.performersData.find((performerItem) => {
      return performerItem.id == performerId;
    });
    return performer.second_name + ' ' + performer.first_name;
  }

  public ngOnInit() {
    this.loading = true;
    this.taskService.getTasks(this.perPage, this.currentPage)
      .subscribe((data: any) => {
          this.data = data.items;
          this.pageCount = data._meta.pageCount;
          this.totalItems = data._meta.totalCount;
          this.performerService.getPerformers(1000, 1)
            .subscribe((data: any) => {
                this.performersData = data.items;
                this.loading = false;
              },
              (error) => {
                alert(error);
                this.loading = false;
              });
        },
        (error) => {
          alert(error);
          this.loading = false;
        });

  }

  /**
   * Create a new task.
   * @param performer
   */
  public create(performer: ITask) {
    this.loading = true;
    this.taskService.addTask(performer)
      .subscribe((data) => {
          this.taskService.getTasks(this.perPage, this.currentPage)
            .subscribe((data: any) => {
                this.data = data.items;
                this.pageCount = data._meta.pageCount;
                this.totalItems = data._meta.totalCount;
                this.loading = false;
              },
              (error) => {
                alert(error);
                this.loading = false;
              });
        },
        (error) => {
          alert(error);
          this.loading = false;
        });
  }

  /**
   * Edit task.
   * @param performer
   */
  public edit(performer: ITask) {
    this.loading = true;
    this.taskService.editTask(performer)
      .subscribe((data) => {
          this.taskService.getTasks(this.perPage, this.currentPage)
            .subscribe((data: any) => {
                this.data = data.items;
                this.pageCount = data._meta.pageCount;
                this.totalItems = data._meta.totalCount;
                this.loading = false;
              },
              (error) => {
                alert(error);
                this.loading = false;
              });
        },
        (error) => {
          alert(error);
          this.loading = false;
        });
  }

  /**
   * Delete task.
   * @param performer
   */
  public delete(performer: ITask) {
    this.loading = true;
    this.taskService.deleteTask(performer)
      .subscribe((data) => {
          this.taskService.getTasks(this.perPage, this.currentPage)
            .subscribe((data: any) => {
                this.data = data.items;
                this.pageCount = data._meta.pageCount;
                this.totalItems = data._meta.totalCount;
                this.loading = false;
              },
              (error) => {
                alert(error);
                this.loading = false;
              });
        },
        (error) => {
          alert(error);
          this.loading = false;
        });
  }
}

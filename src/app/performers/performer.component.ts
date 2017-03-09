import {
  Component,
  OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PerformerService} from './performer.service';
import {IPerformer, Performer} from '../shared/app.model';
@Component({
  selector: 'performers-list',
  styles: [``],
  templateUrl: './performer.component.html'
})
export class PerformerComponent implements OnInit {

  public data: Array<IPerformer>;
  public loading: boolean = false;

  public pageCount: number;
  public totalItems: number;
  public perPage: number = 2;
  public currentPage: number = 1;

  constructor(public route: ActivatedRoute,
              public performerService: PerformerService) {
    this.data = new Array<Performer>();
  }

  public ngOnInit() {
    this.loading = true;
    this.performerService.getPerformers(this.perPage, this.currentPage)
      .subscribe((data) => {
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
   * Navigation method of pagination component
   * @param event
   */
  public onPageChange(event: any) {
    this.loading = true;
    this.currentPage = event.page;
    this.performerService.getPerformers(this.perPage, this.currentPage)
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
   * Create a new performer.
   * @param performer
   */
  public create(performer: IPerformer) {
    this.loading = true;
    this.performerService.addPerformer(performer)
      .subscribe((data) => {
          this.performerService.getPerformers(this.perPage, this.currentPage)
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
   * Edit performer.
   * @param performer
   */
  public edit(performer: IPerformer) {
    this.loading = true;
    this.performerService.editPerformer(performer)
      .subscribe((data) => {
          let index = this.data.indexOf(performer);
          if (index > -1) {
            this.data[index] = data;
          }
          this.loading = false;
        },
        (error) => {
          alert(error);
          this.loading = false;
        });
  }

  /**
   * Delete performer.
   * @param performer
   */
  public delete(performer: IPerformer) {
    this.loading = true;
    this.performerService.deletePerformer(performer)
      .subscribe((data) => {
          this.performerService.getPerformers(this.perPage, this.currentPage)
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

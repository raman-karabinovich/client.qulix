import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ITask, IStatus, Status} from '../shared/app.model';
@Injectable()
export class TaskService {

  private restApiUrl = 'http://server.qulix';
  private statusArray: IStatus[];

  constructor(public http: Http) {
  }

  public getTasks(perPage: number, page: number) {
    return this.http.get(this.restApiUrl + '/tasks?per-page=' + perPage + "&page=" + page)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public addTask(task: ITask): Observable<ITask> {
    let body = JSON.stringify(task);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.restApiUrl + '/tasks', body, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public editTask(task: ITask): Observable<ITask> {
    let body = JSON.stringify(task);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(this.restApiUrl + '/tasks/' + task.id, body, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public deleteTask(task: ITask): Observable<ITask> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.delete(this.restApiUrl + '/tasks/' + task.id, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public getStatuses(): IStatus[] {
    this.statusArray = new Array<Status>();
    this.statusArray.push(new Status(1, "Not started"));
    this.statusArray.push(new Status(2, "In progress"));
    this.statusArray.push(new Status(3, "Completed"));
    this.statusArray.push(new Status(4, "Postponed"));
    return this.statusArray;
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server Error');
  }
}

import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IPerformer} from '../shared/app.model';
@Injectable()
export class PerformerService {

  private restApiUrl = 'http://server.qulix';

  constructor(public http: Http) {
  }

  public getData(): Observable<IPerformer[]> {
    return this.http.get(this.restApiUrl + '/performers')
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public getPerformers(perPage: number, page: number) {
    return this.http.get(this.restApiUrl + '/performers?per-page=' + perPage + "&page=" + page)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public addPerformer(performer: IPerformer): Observable<IPerformer> {
    let body = JSON.stringify(performer);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.restApiUrl + '/performers', body, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public editPerformer(performer: IPerformer): Observable<IPerformer> {
    let body = JSON.stringify(performer);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(this.restApiUrl + '/performers/' + performer.id, body, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public deletePerformer(performer: IPerformer): Observable<IPerformer> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.delete(this.restApiUrl + '/performers/' + performer.id, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server Error');
  }
}

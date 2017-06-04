import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { LottoGame } from '../../models/lotto-game';

/*
  Generated class for the LottoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LottoServiceProvider {

  url = "https://u62ptv4wqc.execute-api.us-east-1.amazonaws.com/prod/lottoAPI";

  constructor(public http: Http) {
    console.log('Hello LottoServiceProvider Provider');
  }

  getLottoGames(game: LottoGame): Observable<number[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, game, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    //return body.data || {};
    return body || {};
  }

}

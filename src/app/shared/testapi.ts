import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestAPI {
  constructor(private http: Http) {
  }

  register() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers });
    return this.http.post(`https://mordred.hu/register`, 'name=teszt', options)
      .map((res: Response) => res.json());
  }
}


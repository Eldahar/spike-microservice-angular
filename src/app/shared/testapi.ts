import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestAPI {
  constructor(private http: Http) {
  }

  register() {
    return this.http.post(`https://mordred.hu/register`, {"name": "teszt"})
      .map((res: Response) => res.json());
  }
}


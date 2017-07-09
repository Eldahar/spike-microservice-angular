import {Component} from '@angular/core';
import {TestAPI} from './shared/testapi';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  title = 'PHP-Angular HTTP/2 REST API test';
  first = {};
  second = {};
  third = {};

  constructor(private apiService: TestAPI) {
  }

  test() {
    for (var i = 0; i < 1000; i++) {
      setTimeout(this.apiService.register().subscribe(data => this.first = data), 100);
    }
  }
}

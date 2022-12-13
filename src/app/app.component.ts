import { Component, Inject } from '@angular/core';
import { MyWindowValueToken } from '../providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms-directives';

  constructor(
    @Inject(MyWindowValueToken) public windowValue: string
  ) { }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  accounts: [
    {
      name: 'Masters account',
      status: 'active'
    },
    {
      name: 'Test account',
      status: 'inactive'
    },
    {
      name: 'Hidden account',
      status: 'unknown'
    },
    {
      name: 'new account',
      status: 'unknown'
    }
  ];
}

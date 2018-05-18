import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addAccount(accountname: string, accountstatus: string) {
    // alert(accountname + ' and ' + accountstatus);
  }
}

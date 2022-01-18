import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../service/account.service';
import { LoggingSevice } from '../service/logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  constructor(private accountService: AccountService) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountService.addAccount(accountName, accountStatus);
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert('changne' + status)
    );
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}

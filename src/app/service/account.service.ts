import { EventEmitter, Injectable } from '@angular/core';
import { LoggingSevice } from './logging.service';
@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  constructor(private loggingService: LoggingSevice) {}
  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }
  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
  }
  statusUpdated = new EventEmitter<string>();
}

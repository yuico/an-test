import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  username = '';
  serverTxt = 'There is no id';
  getServerStatus() {
    return this.serverStatus;
  }

  onCreate() {
    this.serverTxt = `Id is ${this.username}`;
  }

  onIdAdd(e: Event) {
    this.username = (<HTMLInputElement>e.target).value;
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  // 这样的话就是一个属性
  // selector: '.app-servers',
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template:`
  //   <app-server ></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  notAllNewServers = true;
  serverName = 'Test'

  constructor() {
    setTimeout(() => {
      this.notAllNewServers = false;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log(1);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
  }

}

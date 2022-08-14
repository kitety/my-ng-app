import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white
    }
  `]
})

export class ServerComponent implements OnInit {
  @Output() serverClick = new EventEmitter<{ name: string }>();
  @Input('srvElement') element: string

  serverId = 10
  serverStatus = 'running'
  private server: string;


  ngOnInit() {
    console.log('server', this.element)
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

  onServerClick() {
    this.serverClick.emit({name: this.element})
  }

}

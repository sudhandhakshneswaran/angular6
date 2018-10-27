import { Component, OnInit } from '@angular/core';

@Component({
  
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = true;
  serverCreationStatus = 'not created yet';
  serverName ='test';
  constructor() {

    setTimeout(()=>{
      this.allowNewServers = false;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer()
  {
    this.serverCreationStatus ='server created! & the name is '+this.serverName;
  }
  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

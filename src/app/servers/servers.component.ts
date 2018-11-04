import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-servers',
    // template:`
    // <app-server></app-server>
    // <app-server></app-server>`
    templateUrl:'./servers.component.html'
})

export class ServersComponent implements OnInit{

    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'testServer';
    serverCreated = false;
    servers = ['testserver','testserver2'];

    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true
        },2000)
    }

    ngOnInit(){

    }

    onCreateServer(){
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'server was created! Name is '+this.serverName;
    }

    onUpdateServerName(event:any){
        this.serverName = event.target.value;
    }

}
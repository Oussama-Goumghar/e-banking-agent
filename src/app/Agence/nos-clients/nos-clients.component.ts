import { Component, OnInit } from '@angular/core';
import {Client} from '../../Core/Models/client.model';
import {ClientService} from '../../Core/Services/client.service';
import {Observable} from 'rxjs';




@Component({
  selector: 'app-contactez-nous',
  templateUrl: './nos-clients.component.html',
  styleUrls: ['./nos-clients.component.css']
})
export class NosClientsComponent implements OnInit {
  clients$: Observable<Client[]> | null=null;
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.OnGetAllClients()
  }


  OnGetAllClients(){
    this.clients$=this.clientService.getAllClients()
  }

  displayAlert() {
    alert("Prof approved")
  }

}

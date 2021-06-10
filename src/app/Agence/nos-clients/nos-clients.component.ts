import {Component, OnInit} from '@angular/core';
import {Client} from '../../Core/Models/client.model';
import {ClientService} from '../../Core/Services/client.service';
import {Observable, of} from 'rxjs';
import {AppDataState, DataStateEnum} from '../../../state/client.state';
import {catchError, map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-contactez-nous',
  templateUrl: './nos-clients.component.html',
  styleUrls: ['./nos-clients.component.css']
})
export class NosClientsComponent implements OnInit {
  clients$: Observable<AppDataState<Client[]>> | null=null;
  DataStateEnum=DataStateEnum
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.OnGetAllClients()
  }


  OnGetAllClients(){
    this.clients$=this.clientService.getAllClients().pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.Error,errorMessage:err.message}))
    )
  }

  displayAlert() {
    alert("Prof approved")

  }


  disableClient(client:Client) {
    this.clientService.desactivateClient(client).subscribe(data=>{
      client.isActive=data.isActive
    })
  }

  deleteClient(client:Client){
    this.clientService.deleteClient(client).subscribe(data=>{
      this.OnGetAllClients()
    })
  }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}

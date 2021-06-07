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
        console.log(data)
        return ({dataState:DataStateEnum.LOADED,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.Error,errorMessage:err.message}))
    )
  }

  displayAlert() {
    alert("Prof approved")
  }

}

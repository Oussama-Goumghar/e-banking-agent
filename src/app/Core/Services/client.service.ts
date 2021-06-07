import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Client} from '../Models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http:HttpClient) { }

  saveClient(client:Client):Observable<Client>{
    let host=environment.host
   return  this.http.post<Client>(host+"clients",client)
  }

  getAllClients():Observable<Client[]>{
    let host=environment.host
    return this.http.get<Client[]>(host+"clients")
  }

  deleteClient(client:Client){
    let host=environment.host
    return this.http.delete(host+"clients/"+client.id)
  }


}

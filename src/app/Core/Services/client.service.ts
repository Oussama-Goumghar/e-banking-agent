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

  getAllClients():Observable<Client[]>{
    let host=environment.host
    return this.http.get<Client[]>(host+"clients")
  }
}

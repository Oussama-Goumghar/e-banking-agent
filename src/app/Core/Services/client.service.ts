import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Client} from '../Models/client.model';


@Injectable({
  providedIn: 'root'
})

export class ClientService {



  constructor(private http:HttpClient) {

  }



  saveClient(client:Client){
    let host=environment.host
    const headers={
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDc2LCJleHAiOjE2MjM0OTQ0NzZ9.gZLlpbXXsGLPkFL0uqd3zsBB-PGGeV5UtuHU0-k8FJrkXQFXSRWnapy959vq0c2m0Hpi7JxaD9ffouBQsJ9vcA'
    }
   return  this.http.post(host+"client",client,{headers})
  }

  getAllClients():Observable<Client[]>{
   const headers={
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDc2LCJleHAiOjE2MjM0OTQ0NzZ9.gZLlpbXXsGLPkFL0uqd3zsBB-PGGeV5UtuHU0-k8FJrkXQFXSRWnapy959vq0c2m0Hpi7JxaD9ffouBQsJ9vcA'
    }
    let host=environment.host
    return this.http.get<Client[]>(host+"client",{headers})
  }

  getClientById(id:string):Observable<Client>{
    const headers={
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDc2LCJleHAiOjE2MjM0OTQ0NzZ9.gZLlpbXXsGLPkFL0uqd3zsBB-PGGeV5UtuHU0-k8FJrkXQFXSRWnapy959vq0c2m0Hpi7JxaD9ffouBQsJ9vcA'
    }
    let host=environment.host
    return this.http.get<Client>(host+"client/"+id,{headers})
  }

  desactivateClient(client:Client):Observable<Client>{
    const headers={
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDc2LCJleHAiOjE2MjM0OTQ0NzZ9.gZLlpbXXsGLPkFL0uqd3zsBB-PGGeV5UtuHU0-k8FJrkXQFXSRWnapy959vq0c2m0Hpi7JxaD9ffouBQsJ9vcA'
    }
    let host=environment.host
    client.active=!client.active
    return this.http.put<Client>(host+"client/"+client.id,client,{headers})
  }

  deleteClient(client:Client):Observable<void>{
    const headers={
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDc2LCJleHAiOjE2MjM0OTQ0NzZ9.gZLlpbXXsGLPkFL0uqd3zsBB-PGGeV5UtuHU0-k8FJrkXQFXSRWnapy959vq0c2m0Hpi7JxaD9ffouBQsJ9vcA'
    }
    let host=environment.host
    return this.http.delete<void>(host+"client/"+client.id,{headers})
  }

  updateClient(client: Client): Observable<Client> {
    const headers={
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDc2LCJleHAiOjE2MjM0OTQ0NzZ9.gZLlpbXXsGLPkFL0uqd3zsBB-PGGeV5UtuHU0-k8FJrkXQFXSRWnapy959vq0c2m0Hpi7JxaD9ffouBQsJ9vcA'
    }
    let host=environment.host
    return this.http.put<Client>(host+"client/"+client.id,client,{headers})
  }




}

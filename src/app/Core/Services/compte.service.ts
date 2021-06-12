import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Compte} from '../Models/compte.model';
import {environment} from '../../../environments/environment';
import {Client} from '../Models/client.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }

  SaveCompte(compte: Compte) {
    let host=environment.host
    delete compte.id;
    return this.http.post(host+"comptes",compte)
  }

  deleteClient(compte:Compte):Observable<void>{
    let host=environment.host
    return this.http.delete<void>(host+"comptes/"+compte.id)
  }
  getAllCompte():Observable<Compte[]>{
    const headers={
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDc2LCJleHAiOjE2MjM0OTQ0NzZ9.gZLlpbXXsGLPkFL0uqd3zsBB-PGGeV5UtuHU0-k8FJrkXQFXSRWnapy959vq0c2m0Hpi7JxaD9ffouBQsJ9vcA'
    }
    let host=environment.host
    return this.http.get<Compte[]>(host+"comptes",{headers})
  }
}

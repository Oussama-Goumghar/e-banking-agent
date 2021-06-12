import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Benificiaire} from '../Models/benifisiaire.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BenifisiairService {

  constructor(private http:HttpClient) { }

  SaveBenificiaire(benificiaire:Benificiaire):Observable<Benificiaire>{
    let host=environment.host
   return  this.http.post(host+"benificiaire",benificiaire)
  }
}

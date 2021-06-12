import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transaction} from '../Models/Transaction.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Client} from '../Models/client.model';

@Injectable({
  providedIn: 'root'
})
export class TansactionService {

  constructor(private http:HttpClient) { }

  SaveTransaction(transaction:Transaction):Observable<Transaction>{
    let host=environment.host
    return  this.http.post(host+"transactions",transaction)
  }

  getAllTransactions(): Observable<Transaction[]> {
    const headers={
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDc2LCJleHAiOjE2MjM0OTQ0NzZ9.gZLlpbXXsGLPkFL0uqd3zsBB-PGGeV5UtuHU0-k8FJrkXQFXSRWnapy959vq0c2m0Hpi7JxaD9ffouBQsJ9vcA'
    }
    let host=environment.host
    return this.http.get<Transaction[]>(host+"client",{headers})
  }
}

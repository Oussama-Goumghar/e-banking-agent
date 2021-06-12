import {Client} from './client.model';
import {Transaction} from './Transaction.model';

export interface Compte {
  id?: number
  balance?: number
  currency?:string
  type?:string
  compteNumber?:number
  transactions?:Transaction[]
  client?:Client
}

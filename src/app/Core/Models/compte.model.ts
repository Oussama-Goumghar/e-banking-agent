import {Client} from './client.model';
import {Transaction} from './Transaction.model';

export interface Compte {
  id?: number
  solde?: number
  devise?:string
  typeCompte?:string
  transactions?:Transaction[]
  client?:Client
}

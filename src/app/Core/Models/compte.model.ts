import {Client} from './client.model';

export interface Compte {
  id?: number
  solde: number
  devise:string
  typeCompte:string
  client?:Client
}

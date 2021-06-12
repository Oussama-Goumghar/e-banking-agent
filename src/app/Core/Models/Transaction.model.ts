import {Client} from './client.model';
import {Compte} from './compte.model';
import {Benificiaire} from './benifisiaire.model';


export interface Transaction {
  id?: number
  amounts?:number//ch7al tcharja
  typeTransaction?:string//debit - credit
  type?:string// facture - virement
  name?:string// ex:
  discription?:string // motif
  compte?:Compte
  benificiare?:Benificiaire
}

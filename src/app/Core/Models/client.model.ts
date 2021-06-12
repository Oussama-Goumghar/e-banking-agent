import {Compte} from './compte.model';
import {Benificiaire} from './benifisiaire.model';

export interface Client {
  id?: number
  lastname?: string
  firstname?: string
  email?: string
  username?: string
  tele?: string
  adress?: string
  cin?: string
  password?: string
  active?:boolean
  accounts?: Compte[]
  benificiers?: Benificiaire[]

}

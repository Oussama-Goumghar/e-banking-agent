import {Client} from './client.model';


export interface Benificiaire {
  id?: number
 compteNumber?:number
  firstName?:string
  lastName?:string
  email?:string
  tele?:number
  client?:Client
}

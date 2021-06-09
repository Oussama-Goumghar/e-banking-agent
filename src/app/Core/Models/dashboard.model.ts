

export interface Dashboard {
  id?: number
  transactionExtern?:[]
  transactionIntern?:[]
  transactionFailed?:number
  transactionComplete?:number
  transactionBlocked?:number
  clientActive?:[]
  clientInactive?:[]
  totalClient?:number
  totalTransaction?:number
  totalComptes?:number
  totalSolde?:number
}

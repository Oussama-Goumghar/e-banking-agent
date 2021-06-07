export enum DataStateEnum{
  LOADING,
  LOADED,
  Error
}

export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}

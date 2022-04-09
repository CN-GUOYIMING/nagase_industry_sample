export interface PrimaryProductModel {
  key: number
  productName: string
  lastUpdateDate: string
  registDate: string
}

export interface QueryPrimaryProductParameters {
  code: string
  name: string
}

// query primary product return value
export type QueryPrimaryProductModel = PrimaryProductModel[]

import type { AxiosResponse } from 'axios'
import type {
  PrimaryProductModel,
  QueryPrimaryProductModel,
  QueryPrimaryProductParameters,
} from './model/primary-product-model'

import { http } from '@/http/axios'

export const queryPrimaryProduct = async (
  parameters: QueryPrimaryProductParameters
): Promise<QueryPrimaryProductModel> => {
  try {
    const parametersIsEmpty = Object.keys(parameters).every(
      (key: string): boolean =>
        !parameters[key as keyof QueryPrimaryProductParameters]
    )

    if (parametersIsEmpty) {
      return []
    }

    const { data }: AxiosResponse<QueryPrimaryProductModel> =
      await http.get<QueryPrimaryProductModel>('/data.json')

    const dummyData = [...Array(100)].map(
      (element: null, index: number): PrimaryProductModel => ({
        key: index,
        productName: data[0].productName,
        lastUpdateDate: data[0].lastUpdateDate,
        registDate: data[0].registDate,
      })
    )

    return dummyData
  } catch (error) {
    console.log(error)
    return []
  }
}

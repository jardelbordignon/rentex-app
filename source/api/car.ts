import { CarType } from 's/types/car'

import { api } from './base'

class CarApi {
  public async getAll() {
    return api.get<CarType[]>('cars')
  }
}

export const carApi = new CarApi()

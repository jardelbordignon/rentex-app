import { CarType } from 's/types/car'
import { ScheduleByUser, SchedulesByCar } from 's/types/schedule'

import { api } from './base'

class ScheduleApi {
  async findByCar(carId: string) {
    return api.get<SchedulesByCar>(`schedules_by_car?car_id=${carId}`)
  }

  async createByCar(carId: string, dates: string[]) {
    return api.post('schedules_by_car', {
      car_id: carId,
      unavailable_dates: dates,
    })
  }

  async updateByCar(carId: string, dates: string[]) {
    const schedules = await this.findByCar(carId)
    if (!schedules) return

    return api.put(`schedules_by_car?car_id=${carId}`, {
      unavailable_dates: [...schedules.unavailable_dates, ...dates],
    })
  }

  async findByUser(userId: string) {
    return api.get<ScheduleByUser[]>(`schedules_by_user?user_id=${userId}`)
  }

  async createByUser(car: CarType, userId: string, dates: string[]) {
    return api.post('schedules_by_user', {
      user_id: userId,
      car,
      startDate: dates[0],
      endDate: dates[dates.length - 1],
    })
  }

  async add(car: CarType, dates: string[]) {
    const hasSchedules = await this.findByCar(car.id)
    await this[hasSchedules ? 'updateByCar' : 'createByCar'](car.id, dates)
    await this.createByUser(car, 'user-1', dates)
  }
}

export const scheduleApi = new ScheduleApi()

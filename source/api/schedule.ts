import { ScheduleByUser, SchedulesByCar } from 's/types/schedule'

import { api } from './base'

class ScheduleApi {
  async findByUser(userId: string) {
    return api.get<ScheduleByUser[]>(`schedules_by_user?user_id=${userId}`)
  }

  async findByCar(carId: string) {
    return api.get<SchedulesByCar>(`schedules_by_car/${carId}`)
  }

  async add(carId: string, dates: string[]) {
    const schedules = await this.findByCar(carId)

    const unavailable_dates = schedules.unavailable_dates.length
      ? [...schedules.unavailable_dates, ...dates]
      : dates

    await api.put(`schedules_by_cars/${carId}`, {
      unavailable_dates,
    })
  }
}

export const scheduleApi = new ScheduleApi()

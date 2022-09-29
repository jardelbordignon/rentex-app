import { SchedulesByCar } from 's/types/schedule'

import { api } from './base'

class ScheduleApi {
  async findByCar(carId: string) {
    return api.get<SchedulesByCar>(`schedules_bycars/${carId}`)
  }

  async add(carId: string, dates: string[]) {
    const schedules = await this.findByCar(carId)

    const unavailable_dates = schedules.unavailable_dates.length
      ? [...schedules.unavailable_dates, ...dates]
      : dates

    await api.put(`schedules_bycars/${carId}`, {
      unavailable_dates,
    })
  }
}

export const scheduleApi = new ScheduleApi()

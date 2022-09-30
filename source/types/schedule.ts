import { CarType } from './car'

export type ScheduleByUser = {
  id: string
  user_id: number
  car: CarType
  startDate: string
  endDate: string
}

export type SchedulesByCar = {
  id: string
  unavailable_dates: string[]
}

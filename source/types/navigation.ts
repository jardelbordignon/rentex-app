import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { CarType } from './car'

export type AppParamList = {
  CarDetails: { car: CarType }
  Home: undefined
  MyCars: undefined
  Scheduling: { car: CarType }
  SchedulingComplete: undefined
  SchedulingDetails: {
    car: CarType
    dates: string[]
  }
}

export type NavProps = NativeStackScreenProps<AppParamList, any>
export type CarDetailsNavProps = NativeStackScreenProps<AppParamList, 'CarDetails'>
export type SchedulingNavProps = NativeStackScreenProps<AppParamList, 'Scheduling'>
export type SchedulingDetailsNavProps = NativeStackScreenProps<
  AppParamList,
  'SchedulingDetails'
>

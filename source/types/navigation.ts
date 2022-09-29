import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { CarType } from './car'

export type AppParamList = {
  Home: undefined
  CarDetails: { car: CarType }
  Scheduling: { car: CarType }
  SchedulingComplete: undefined
  SchedulingDetails: {
    car: CarType
    dates: { from: string; to: string }
  }
}

export type NavProps = NativeStackScreenProps<AppParamList, any>
export type CarDetailsNavProps = NativeStackScreenProps<AppParamList, 'CarDetails'>
export type SchedulingNavProps = NativeStackScreenProps<AppParamList, 'Scheduling'>
export type SchedulingDetailsNavProps = NativeStackScreenProps<
  AppParamList,
  'SchedulingDetails'
>

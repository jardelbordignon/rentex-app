import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { CarType } from './car'

export type AppParamList = {
  Home: undefined
  CarDetails: CarType
  Scheduling: undefined
  SchedulingComplete: undefined
  SchedulingDetails: undefined
}

export type NavProps = NativeStackScreenProps<AppParamList, any>
export type CarDetailsNavProps = NativeStackScreenProps<AppParamList, 'CarDetails'>

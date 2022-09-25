import { Text, View } from 'react-native'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from 's/assets/logo.svg'
import { CarListItem } from 's/components/molecules/CarListItem'
import { CarType } from 's/types/car'

import s from './styles'

const carsData: CarType[] = [
  {
    name: 'Toyota',
    brand: 'Toyota',
    rent: { period: 'Ao dia', price: 150 },
    images: [
      { url: 'https://www.freepngimg.com/thumb/toyota/4-toyota-png-image-car-image.png' },
    ],
  },
  {
    name: 'Toyota',
    brand: 'Toyota',
    rent: { period: 'Ao dia', price: 150 },
    images: [
      { url: 'https://www.freepngimg.com/thumb/toyota/4-toyota-png-image-car-image.png' },
    ],
  },
]

export function Home() {
  return (
    <View style={s.box}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <View style={s.header}>
        <View style={s.headerContent}>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <Text style={s.totalCars}>Total de 12 carros</Text>
        </View>
      </View>

      {carsData.map((data, i) => (
        <CarListItem key={i} data={data} />
      ))}
    </View>
  )
}

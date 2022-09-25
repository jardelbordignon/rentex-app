import { FlatList, View } from 'react-native'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from 's/assets/logo.svg'
import { Txt } from 's/components/atoms'
import { CarListItem } from 's/components/molecules/CarListItem'
import { CarType } from 's/types/car'

import s from './styles'

const carsData: CarType[] = [
  {
    id: '1',
    name: 'Toyota',
    brand: 'Toyota',
    rent: { period: 'Ao dia', price: 150 },
    images: [
      { url: 'https://www.freepngimg.com/thumb/toyota/4-toyota-png-image-car-image.png' },
    ],
  },
  {
    id: '2',
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
          <Txt size="xs">Total de 12 carros</Txt>
        </View>
      </View>

      <FlatList
        data={carsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CarListItem data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.contentList}
      />
    </View>
  )
}

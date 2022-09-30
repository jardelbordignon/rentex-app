import { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { carApi } from 's/api/car'
import Logo from 's/assets/logo.svg'
import { Loading, Txt } from 's/components/atoms'
import { CarListItem, FloatingButtons } from 's/components/molecules'
import { CarType } from 's/types/car'
import { NavProps } from 's/types/navigation'

import s from './styles'

export function Home({ navigation }: NavProps) {
  const [cars, setCars] = useState<CarType[]>([])
  const [loading, setLoading] = useState(false)

  const loadCars = async () => {
    try {
      setCars(await carApi.getAll())
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCars()
  }, [])

  return (
    <View style={s.box}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <View style={s.header}>
        <View style={s.headerContent}>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <Txt size="xs">Total de 12 carros</Txt>
        </View>
      </View>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CarListItem
              data={item}
              onPress={() => navigation.navigate('CarDetails', { car: item })}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={s.contentList}
        />
      )}

      <FloatingButtons
        buttons={[
          { color: 'main', icon: 'car', onPress: () => navigation.navigate('MyCars') },
        ]}
      />
    </View>
  )
}

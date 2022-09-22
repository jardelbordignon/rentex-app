import { Text, View } from 'react-native'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from 's/assets/logo.svg'

import s from './styles'

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
    </View>
  )
}

import { Text, View } from 'react-native'

import { BackButton } from 's/components/molecules'

import s from './styles'

export function CarDetails() {
  return (
    <View style={s.box}>
      <View style={s.header}>
        <BackButton
          onPress={() => {
            console.log('Press')
          }}
        />
        <Text>CarDetails</Text>
      </View>
    </View>
  )
}

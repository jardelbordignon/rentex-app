import { ScrollView, StatusBar, View } from 'react-native'

import ArrowSvg from 's/assets/arrow.svg'
import { Txt } from 's/components/atoms'
import { BackButton, Button, Calendar } from 's/components/molecules'

import s from './styles'

export function Scheduling() {
  return (
    <View style={s.box}>
      <View style={s.header}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <BackButton onPress={() => {}} color="shape" />

        <Txt family="secondary_600" size="xl" color="shape" style={s.title}>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Txt>

        <View style={s.rentalPeriod}>
          <View style={s.dateInfo}>
            <Txt family="secondary_500" size="xs">
              DE
            </Txt>
            <Txt color="shape">10/01</Txt>
          </View>

          <ArrowSvg />

          <View style={s.dateInfo}>
            <Txt family="secondary_500" size="xs">
              ATÉ
            </Txt>
            <Txt color="shape">10/01</Txt>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <Calendar />
      </ScrollView>

      <View style={s.footer}>
        <Button title="Confirmar" />
      </View>
    </View>
  )
}

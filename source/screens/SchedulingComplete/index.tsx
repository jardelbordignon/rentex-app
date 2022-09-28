import { StatusBar, View, useWindowDimensions } from 'react-native'

import DoneSvg from 's/assets/done.svg'
import LogoBackgroundSvg from 's/assets/logo_background_gray.svg'
import { Txt } from 's/components/atoms'
import { ConfirmButton } from 's/components/molecules'
import { NavProps } from 's/types/navigation'

import s from './styles'

export function SchedulingComplete({ navigation }: NavProps) {
  const { width } = useWindowDimensions()

  return (
    <View style={s.box}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LogoBackgroundSvg width={width} />

      <View style={s.content}>
        <DoneSvg width={80} height={80} />
        <Txt family="secondary_600" size="lg" color="shape" style={s.title}>
          Carro alugado!
        </Txt>
        <Txt size="sm" color="text_detail" align="center" style={s.message}>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTEX{'\n'}
          pegar seu automóvel.
        </Txt>
      </View>

      <View style={s.footer}>
        <ConfirmButton title="Ok" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}

import { View } from 'react-native'
import { SvgProps } from 'react-native-svg'

import { Txt } from 's/components/atoms'

import s from './styles'

type Props = {
  name: string
  icon: React.FC<SvgProps>
}

export function Accessory({ name, icon: Icon }: Props) {
  return (
    <View style={s.box}>
      <Icon width={32} height={32} />
      <Txt size="xs">{name}</Txt>
    </View>
  )
}

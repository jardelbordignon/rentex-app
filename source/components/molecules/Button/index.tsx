import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Txt } from 's/components/atoms'
import { ThemeType, theme } from 's/theme'

import s from './styles'

type Props = RectButtonProps & {
  title: string
  color?: keyof ThemeType['colors']
  txtColor?: keyof ThemeType['colors']
}

export function Button({ title, color = 'main', txtColor = 'shape', ...rest }: Props) {
  const backgroundColor = theme.colors[color]

  return (
    <RectButton {...rest} style={[s.box, { backgroundColor }]}>
      <Txt color={txtColor}>{title}</Txt>
    </RectButton>
  )
}

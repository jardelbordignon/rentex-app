import { ActivityIndicator } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Txt } from 's/components/atoms'
import { ThemeType, theme } from 's/theme'

import s from './styles'

type Props = RectButtonProps & {
  title: string
  color?: keyof ThemeType['colors']
  txtColor?: keyof ThemeType['colors']
  loading?: boolean
}

export function Button({
  title,
  color = 'main',
  txtColor = 'shape',
  loading = false,
  ...rest
}: Props) {
  if (loading) rest.enabled = false
  const opacity = rest.enabled === false ? 0.7 : 1
  const backgroundColor = theme.colors[color]

  return (
    <RectButton {...rest} style={[s.box, { backgroundColor, opacity }]}>
      {loading ? (
        <ActivityIndicator color={theme.colors[txtColor]} />
      ) : (
        <Txt color={txtColor}>{title}</Txt>
      )}
    </RectButton>
  )
}

/**
 <FloatingButtons buttons={[{ color: 'main', icon: 'car', onPress: () => {} }]} />

 <FloatingButtons
    buttons={[
      { color: 'success', icon: 'home', onPress: () => {} },
      { color: 'main', icon: 'car', iconColor: 'text', onPress: () => {} },
    ]}
    buttonsSize={50}
    position="bottomLeft"
  />
 */

import { View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ThemeType, theme } from 's/theme'

import s from './styles'

type FloatingButton = RectButtonProps & {
  color: keyof ThemeType['colors']
  icon: string
  iconColor?: keyof ThemeType['colors']
}

type Props = {
  buttons: FloatingButton[]
  buttonsSize?: number
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
}

export function FloatingButtons({
  buttons,
  buttonsSize = 60,
  position = 'bottomRight',
}: Props) {
  const positionStyle =
    position === 'topRight'
      ? { right: 0 }
      : position === 'bottomLeft'
      ? { bottom: 0, left: 0 }
      : position === 'bottomRight'
      ? { bottom: 0, right: 0 }
      : {}

  return (
    <View style={[s.box, positionStyle, { width: buttonsSize }]}>
      {buttons.map(({ color, icon, iconColor = 'shape', ...rest }, i) => {
        const style = {
          backgroundColor: theme.colors[color],
          width: buttonsSize,
          height: buttonsSize,
          borderRadius: buttonsSize * 0.5,
        }

        return (
          <RectButton {...rest} style={[s.button, style]} key={i}>
            <Icon name={icon} size={buttonsSize * 0.6} color={theme.colors[iconColor]} />
          </RectButton>
        )
      })}
    </View>
  )
}

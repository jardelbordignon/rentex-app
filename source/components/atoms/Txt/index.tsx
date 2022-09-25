import { Text, type TextProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { ThemeType, theme } from 's/theme'

type Props = TextProps & {
  family?: keyof ThemeType['fontFamily']
  size?: keyof ThemeType['fontSize']
  color?: keyof ThemeType['colors']
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

export function Txt({
  family = 'primary_500',
  size = 'md',
  color = 'text',
  transform = 'none',
  ...rest
}: Props) {
  return (
    <Text
      {...rest}
      style={Object.assign(
        {
          fontFamily: theme.fontFamily[family],
          fontSize: RFValue(theme.fontSize[size]),
          color: theme.colors[color],
          textTransform: transform,
        },
        rest.style
      )}>
      {rest.children}
    </Text>
  )
}

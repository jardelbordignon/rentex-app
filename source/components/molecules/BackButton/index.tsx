import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ThemeType, theme } from 's/theme'

type Props = BorderlessButtonProps & {
  color?: keyof ThemeType['colors']
}

export function BackButton({ color = 'text', ...rest }: Props) {
  return (
    <BorderlessButton {...rest}>
      <Icon name="chevron-left" size={theme.fontSize.lg} color={theme.colors[color]} />
    </BorderlessButton>
  )
}

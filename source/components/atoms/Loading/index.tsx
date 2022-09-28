import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native'

import { theme } from 's/theme'

import s from './styles'

type Props = ActivityIndicatorProps

export function Loading(props: Props) {
  return (
    <View style={s.box}>
      <ActivityIndicator color={theme.colors.main} size="large" {...props} />
    </View>
  )
}

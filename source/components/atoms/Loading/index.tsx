import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native'

import s from './styles'

type Props = ActivityIndicatorProps

export function Loading(props: Props) {
  return (
    <View style={s.box}>
      <ActivityIndicator {...props} />
    </View>
  )
}

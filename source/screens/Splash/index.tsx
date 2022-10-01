import { Button, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

import s from './styles'

export function Splash() {
  const animation = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: animation.value }],
  }))

  const handleAnimationPosition = () => {
    setInterval(() => {
      animation.value = animation.value + 1
    }, 2)
  }

  return (
    <View style={s.box}>
      <Animated.View style={[s.animatedView, animatedStyles]} />

      <Button title="Mover" onPress={handleAnimationPosition} />
    </View>
  )
}

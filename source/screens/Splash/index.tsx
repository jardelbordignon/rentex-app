import { Button, Dimensions, View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import s from './styles'

const WIDTH = Dimensions.get('window').width

export function Splash() {
  const animation = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(animation.value, {
          duration: 500,
          easing: Easing.bezier(0, 1, 1, 0), // https://cubic-bezier.com/
        }),
      },
    ],
  }))

  const handleAnimationPosition = () => {
    animation.value = Math.random() * (WIDTH - 100)
  }

  return (
    <View style={s.box}>
      <Animated.View style={[s.animatedView, animatedStyles]} />

      <Button title="Mover" onPress={handleAnimationPosition} />
    </View>
  )
}

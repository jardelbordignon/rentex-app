// https://www.youtube.com/watch?v=2nXsLpUCO20&t=3064s
import { Animated, ImageBackground, type ImageProps } from 'react-native'

import s from './styles'

type Props = {
  source: ImageProps['source']
  smallSource?: ImageProps['source']
  resizeMode?: ImageProps['resizeMode']
  aspectRatio?: number
}

export function LazyImage({
  source,
  smallSource,
  aspectRatio = 2,
  resizeMode = 'contain',
}: Props) {
  const opacity = new Animated.Value(0)

  const handleAnimate = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  const image = (
    <Animated.Image
      source={source}
      style={[s.image, { aspectRatio, opacity }]}
      resizeMode={resizeMode}
      onLoadEnd={handleAnimate}
    />
  )

  if (smallSource) {
    return (
      <ImageBackground
        style={[s.smallImage, { aspectRatio }]}
        source={smallSource}
        resizeMode={resizeMode}>
        {image}
      </ImageBackground>
    )
  }

  return image
}

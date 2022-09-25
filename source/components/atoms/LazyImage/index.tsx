// https://www.youtube.com/watch?v=2nXsLpUCO20&t=3064s
import { Animated, ImageBackground, type ImageProps } from 'react-native'

import s from './styles'

type Props = ImageProps & {
  source: ImageProps['source']
  thumbSource?: ImageProps['source']
  resizeMode?: ImageProps['resizeMode']
  aspectRatio?: number
  width?: number
  height?: number
}

export function LazyImage({
  source,
  thumbSource,
  aspectRatio = 2,
  resizeMode = 'contain',
  width = 150,
  height = 150,
  ...rest
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
      style={[s.image, { aspectRatio, opacity, width, height }]}
      resizeMode={resizeMode}
      onLoadEnd={handleAnimate}
      {...rest}
    />
  )

  if (thumbSource) {
    return (
      <ImageBackground
        style={[s.smallImage, { aspectRatio }]}
        source={thumbSource}
        resizeMode={resizeMode}
        {...rest}>
        {image}
      </ImageBackground>
    )
  }

  return image
}
